import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private af: AngularFire){


    //const tasks$ : FirebaseListObservable<any> = af.database.list('tasks');
    //
    //tasks$.subscribe(
    //
    //  val => console.log(val)
    //
    //);



    // NOTE: kept here for reference. In case you are using firebase sdk directly.
    //// Initialize Firebase
    //var config = {
    //  apiKey: "AIzaSyARhXidpvymn3AGsmDWmd43lShiqX_MLec",
    //  authDomain: "todo-angular2-f073e.firebaseapp.com",
    //  databaseURL: "https://todo-angular2-f073e.firebaseio.com",
    //  storageBucket: "todo-angular2-f073e.appspot.com",
    //  messagingSenderId: "224605495324"
    //};
    //initializeApp(firebaseConfig);
    //

    // You don't need this if you are using angularfire2 library
    // angularfire2 provides great wrapper functions for the firebase sdk
    //var root = database().ref('messages/1');
    //root.on('value', function(snapshot){
    //  console.log(snapshot.key, snapshot.val());
    //});



  }
}
