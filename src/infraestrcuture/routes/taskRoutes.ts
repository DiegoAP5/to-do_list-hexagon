import express from 'express';
import { TaskService } from '../../application/services/taskService';
import { HTTPTaskAdapter } from '../adapters/httpTaskAdapter';

export class taskRoutes {
  constructor(private readonly taskService: TaskService, private readonly httpTaskAdapter: HTTPTaskAdapter) {}

  registerRoutes(app: express.Application): void {
    app.get('/tasks', this.httpTaskAdapter.getAllTasks.bind(this.httpTaskAdapter));
    app.get('/tasks/:id', this.httpTaskAdapter.getTaskById.bind(this.httpTaskAdapter));
    app.post('/tasks', this.httpTaskAdapter.addTask.bind(this.httpTaskAdapter));
    app.put('/tasks/:id', this.httpTaskAdapter.updateTask.bind(this.httpTaskAdapter));
    app.delete('/tasks/:id', this.httpTaskAdapter.deleteTask.bind(this.httpTaskAdapter));
  }
}
