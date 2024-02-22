import express from 'express';
import { MemoryTaskAdapter } from './src/infraestrcuture/adapters/memoryTaskAdapter';
import { TaskService } from './src/application/services/taskService';
import { taskRoutes } from './src/infraestrcuture/routes/taskRoutes';
import { HTTPTaskAdapter } from './src/infraestrcuture/adapters/httpTaskAdapter';

const app = express();
const port = 3000;

app.use(express.json());

const taskRepository = new MemoryTaskAdapter(); // Modificado aquí
const taskService = new TaskService(taskRepository);
const httpTaskAdapter = new HTTPTaskAdapter(taskService);
const taskController = new taskRoutes(taskService, httpTaskAdapter);

taskController.registerRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
