import { Task } from '../task';

export interface TaskPort {
  getAllTasks(): Task[];
  getTaskById(id: string): Task | undefined;
  addTask(task: Task): void;
  updateTask(task: Task): void;
  deleteTask(id: string): void;
}
