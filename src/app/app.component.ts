import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  model = new Model();
  isDisplayAll = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplayAll) {
      return this.model.items;
    }
    else {
      return this.model.items.filter(p => p.action == false);
    }
    
  }
  
  addItem(value) {
    if (value != "") {
      this.model.items.push(new ToDoItem(value, false));
    }
    
  }

}
