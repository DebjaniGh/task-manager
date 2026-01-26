# Task Manager Application

A simple and elegant task management application built with Angular 17. See the preview below:

<img width="1496" height="1332" alt="tm1" src="https://github.com/user-attachments/assets/2293d3ff-4da0-413c-a375-4913f145df25" />

<img width="1388" height="432" alt="tm2" src="https://github.com/user-attachments/assets/8db2880b-4787-409f-a266-8877ca1348af" />

<img width="1280" height="426" alt="tm3" src="https://github.com/user-attachments/assets/ebfa9acb-ca87-42d1-a855-ed6e5eace8de" />

https://github.com/user-attachments/assets/2185e713-d1a6-43df-9ebb-2d7f36783dc7

https://github.com/user-attachments/assets/a896c1fc-6aab-461c-84c3-99503235a5fd


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
- **Reactive Programming**: Uses Angular Signals for reactive data flow; no need to do subscription cleanup as compared to RxJs.
- **Component Separation**: Clear separation of concerns with dedicated components for each feature

## Technologies Used

- Angular 17
- TypeScript
- Angular Signals
- CSS3 (with modern styling)
