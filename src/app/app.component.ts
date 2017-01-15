import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyARhXidpvymn3AGsmDWmd43lShiqX_MLec",
      authDomain: "todo-angular2-f073e.firebaseapp.com",
      databaseURL: "https://todo-angular2-f073e.firebaseio.com",
      storageBucket: "todo-angular2-f073e.appspot.com",
      messagingSenderId: "224605495324"
    };
    initializeApp(config);

    var root = database().ref('messages/1');
    root.on('value', function(snapshot){
      console.log(snapshot.key, snapshot.val());
    });

  }
}
