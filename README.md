# Task Manager Application

A simple and elegant task management application built with Angular.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed/incomplete
- ✅ Delete tasks
- ✅ Modern, responsive UI
- ✅ Real-time task list updates

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── add-task/          # Component for adding new tasks
│   │   ├── task-item/         # Component for displaying a single task
│   │   └── task-list/         # Component for displaying all tasks
│   ├── models/
│   │   └── task.model.ts      # Task interface
│   ├── services/
│   │   └── task.service.ts    # Service for task management
│   ├── app.component.ts       # Root component
│   └── app.routes.ts          # Routing configuration
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

## Architecture

This application follows Angular best practices:

- **Standalone Components**: All components are standalone for better modularity
- **Service-based State Management**: Tasks are managed through a centralized service
- **Reactive Programming**: Uses RxJS Observables for reactive data flow
- **Component Separation**: Clear separation of concerns with dedicated components for each feature

## Technologies Used

- Angular 17
- TypeScript
- RxJS
- CSS3 (with modern styling)
