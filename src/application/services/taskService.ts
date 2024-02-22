import { Task } from '../../domain/task';
import { TaskPort } from '../../domain/ports/taskPort';

export class TaskService {
  constructor(private readonly taskRepository: TaskPort) {}

  getAllTasks(): Task[] {
    return this.taskRepository.getAllTasks();
  }

  getTaskById(id: string): Task | undefined {
    return this.taskRepository.getTaskById(id);
  }

  addTask(task: Task): void {
    this.taskRepository.addTask(task);
  }

  updateTask(task: Task): void {
    this.taskRepository.updateTask(task);
  }

  deleteTask(id: string): void {
    this.taskRepository.deleteTask(id);
  }
}
