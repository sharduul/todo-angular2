
import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { ViewTaskComponent } from "./view-task/view-task.component";

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


