import { Component } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'router-outlet',
  templateUrl: './register.component.pug',
})

export class RegisterComponent {
  title = 'Register';

  constructor(private apollo: Apollo) {}

  onSubmit(): void {
    console.log(this);
    
    // this.apollo.watchQuery({
    //   mutation: gql`
    //     {
    //       createUser(createUserDate: {userName: ${this}}) {
    //       userId
    //       userName
    //       }
    //     }
    //   `,
    // })
  }
}