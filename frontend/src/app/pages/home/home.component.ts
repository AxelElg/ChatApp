import { Component } from '@angular/core';

@Component({
  selector: 'router-outlet',
  templateUrl: './home.component.pug',
})

export class HomeComponent {
  visible: boolean = true;
  myNumber: number = 1;
  title = 'Home';
  addOne () {
    this.myNumber += 1;
  }
  removeOne () {
    this.myNumber -= 1;
  }
  toggleVisible() {
    console.log('hello');
    
    this.visible = !this.visible;
  }
}
