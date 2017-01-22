import {Injectable, Inject} from '@angular/core';
import {ITask, Task} from "./task";
import {AngularFireDatabase, FirebaseRef} from "angularfire2";
import {Http} from "@angular/http";
import {firebaseConfig} from "../environments/firebase.config";
import {Observable, Subject} from "rxjs/Rx";


@Injectable()
export class TaskService {

  sdkDb:any;

  constructor(private db:AngularFireDatabase, @Inject(FirebaseRef) fb,
              private http:Http) {

    this.sdkDb = fb.database().ref();

  }

  // findAllTasks():Observable<any[]> {

  //   return this.db.list('tasks')
  //     .do(console.log)
  //     .map(Task.fromJsonList);

  // }

  findAllTasks():Observable<ITask[]> {

    return this.db.list('tasks')
      .do(console.log);

  }

  filterTasks(queryStr:string):Observable<ITask[]> {

    if(queryStr.length > 0){
      return this.db.list('tasks', {
        query: {
          orderByChild: 'name',
          equalTo: queryStr
        }
      })
        .do(console.log);
    }
    else {
      return this.findAllTasks();
    }

  }

  //findTaskById(id:string): Observable<Task> {
  //  return this.db.list('tasks', {
  //    query: {
  //      orderByChild: 'id',
  //      equalTo: id
  //    }
  //  }).filter(results => results && results.length > 0)
  //    .map(results => Task.fromJson(results[0]))
  //    .do(console.log);
  //
  //}


  createNewTask(task:ITask): Observable<any> {

    const taskToSave = Object.assign({}, task, {  });

    const newTaskKey = this.sdkDb.child('tasks').push().key;

    let dataToSave = {};

    dataToSave["tasks/" + newTaskKey] = taskToSave;

    return this.firebaseUpdate(dataToSave);
  }

  firebaseUpdate(dataToSave) {
    const subject = new Subject();

    // this is necessary to remove invalid javascript keys
    dataToSave = JSON.parse(JSON.stringify(dataToSave));

    this.sdkDb.update(dataToSave)
      .then(
        val => {
        subject.next(val);
        subject.complete();

      },
        err => {
        subject.error(err);
        subject.complete();
      }
    );

    return subject.asObservable();
  }


  saveTask(taskId:string, task:ITask): Observable<any> {

    //const taskToSave = Object.assign({}, task, { });
    //delete(taskToSave.$key);
    delete(task.$key);

    let dataToSave = {};
    dataToSave[`tasks/${taskId}`] = task;

    return this.firebaseUpdate(dataToSave);

  }


  deleteTask(taskId:string): Observable<any> {

    const url = firebaseConfig.databaseURL + '/tasks/' + taskId + '.json';

    return this.http.delete(url);
  }


}






