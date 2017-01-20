import { database } from 'firebase';


export interface ITask {
  $key?: string;
  name: string;
  description: string;
  dateCreated: number;
  priority: number;
  status: boolean;
}

export class Task implements ITask {

  status: boolean = false;
  dateCreated: number = Math.floor(Date.now() / 1000);
  name: string;
  description: string;
  priority: number;


  constructor(name: string, description: string, priority: number) {
    this.name = name;
    this.description = description;
    this.priority = priority;
  }
}




// export class Task {

//   taskId: number;


//   constructor(
//     public $key:string,
//     public id: number,
//     public name: string,
//     public description: string,
//     public dateCreated: string,
//     public dateDue: string,
//     public priority: number,
//     public status: boolean) {

//     //this.id = this.taskId = this.taskId + 1;
//     //this.name = "";
//     //this.description = "";
//     //this.dateCreated = "";
//     //this.dateDue = "";
//     //this.priority = 1;
//     //this.status = false;

//   }



//   static fromJsonList(array): Task[] {
//     return array.map(Task.fromJson);
//   }

//   static fromJson({$key, id, name,
//     description,dateCreated,dateDue,priority, status}):Task {
//     return new Task(
//       $key,
//       id,
//       name,
//       description,
//       dateCreated,
//       dateDue,
//       priority,
//       status);
//   }


// }







