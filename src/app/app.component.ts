import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Users {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  users$: Observable<Users[]>;
  usersRef: AngularFirestoreCollection<Users>;

  constructor(private afs: AngularFirestore) {
    this.usersRef = this.afs.collection('users');

    this.users$ = this.usersRef.valueChanges();
  }
}
