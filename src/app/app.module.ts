import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from '../environments/firebase.config';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { routerConfig } from "./router.config";

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from "../service/task-list.service";
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CreateTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
