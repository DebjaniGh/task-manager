import { Injectable, signal, computed } from '@angular/core';
import { Task } from '../models/task.model';
import tasksData from '../data/tasks.json';

interface TaskJson {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSignal = signal<Task[]>([]);
  
  // Public readonly signal for components to access
  public tasks = this.tasksSignal.asReadonly();
  
  // Computed signals for derived state (optional but useful)
  public completedTasksCount = computed(() => 
    this.tasksSignal().filter(task => task.completed).length
  );
  
  public totalTasksCount = computed(() => 
    this.tasksSignal().length
  );

  constructor() {
    // Initialize with tasks from JSON file
    const initialTasks: Task[] = (tasksData as TaskJson[]).map(task => ({
      id: task.id,
      title: task.title,
      completed: task.completed,
      createdAt: new Date(task.createdAt)
    }));
    this.tasksSignal.set(initialTasks);
  }

  getTasks(): Task[] {
    return [...this.tasksSignal()];
  }

  addTask(title: string): void {
    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      createdAt: new Date()
    };
    this.tasksSignal.update(tasks => [...tasks, newTask]);
  }

  toggleTask(id: number): void {
    this.tasksSignal.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  deleteTask(id: number): void {
    this.tasksSignal.update(tasks => tasks.filter(t => t.id !== id));
  }
}
