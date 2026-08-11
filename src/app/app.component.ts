import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { AddTaskComponent } from "./components/add-task/add-task.component";
// import { TaskListComponent } from "./components/task-list/task-list.component";
import { TabsComponent } from "./components/tabs/tabs.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    // AddTaskComponent, TaskListComponent,
    TabsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Task Manager";
}
