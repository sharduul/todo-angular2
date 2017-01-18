import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskService } from '../../service/task-list.service';
import { Task } from '../../service/task';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  form:FormGroup;

  @Input()
  initialValue:any

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
  }

  isErrorVisible(field:string, error:string) {

    return this.form.controls[field].dirty
      && this.form.controls[field].errors &&
      this.form.controls[field].errors[error];

  }

  save(form){


    this.taskService.createNewTask(form.value)
        .subscribe(
      () => {
        alert("task created successfully!!!");
        form.reset();
      },
      error => console.log(`error creating lesson ${error}`)

    )


  }

  reset() {
    this.form.reset();
  }


}
