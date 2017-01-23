
import { Route } from "@angular/router";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { ViewTaskComponent } from "./view-task/view-task.component";
import { TaskListComponent } from "./task-list/task-list.component";

export const routerConfig : Route[] = [
    {
        path:'home',
        component: TaskListComponent
    },
    {
        path:'create',
        component: CreateTaskComponent
    },
    {
      path: 'tasks/:id',
      children: [
          {
              path: 'view',
              component:  ViewTaskComponent
          }
      ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];


