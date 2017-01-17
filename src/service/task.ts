
export class Task {


  constructor(
    public $key:string,
    public id: number,
    public name: string,
    public description: string,
    public dateCreated: string,
    public dateDue: string,
    public priority: number,
    public status: boolean) {

  }



  static fromJsonList(array): Task[] {
    return array.map(Task.fromJson);
  }

  static fromJson({$key, id, name,
    description,dateCreated,dateDue,priority, status}):Task {
    return new Task(
      $key,
      id,
      name,
      description,
      dateCreated,
      dateDue,
      priority,
      status);
  }


}







