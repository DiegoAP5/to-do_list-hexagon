import express, { Request, Response } from 'express';
import { Task } from '../../domain/task';
import { TaskService } from '../../application/services/taskService';

export class HTTPTaskAdapter {
  constructor(private readonly taskService: TaskService) {}

  getAllTasks(req: Request, res: Response): void {
    const tasks = this.taskService.getAllTasks();
    res.json(tasks);
  }

  getTaskById(req: Request, res: Response): void {
    const { id } = req.params;
    const task = this.taskService.getTaskById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  }

  addTask(req: Request, res: Response): void {
    const taskData: Task = req.body;
    this.taskService.addTask(taskData);
    res.status(201).json({ message: 'Task added successfully' });
  }

  updateTask(req: Request, res: Response): void {
    const { id } = req.params;
    const taskData: Task = req.body;
    taskData.id = id;
    this.taskService.updateTask(taskData);
    res.json({ message: 'Task updated successfully' });
  }

  deleteTask(req: Request, res: Response): void {
    const { id } = req.params;
    this.taskService.deleteTask(id);
    res.json({ message: 'Task deleted successfully' });
  }
}
