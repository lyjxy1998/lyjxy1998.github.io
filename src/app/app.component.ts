import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Item } from "./item";
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ItemComponent],
  /*
  template: `
  <div class="main">
    <h1>{{ title }}</h1>
    <!--- <h2>What would you like to do today?</h2> -->

    <label for="addItemInput">What would you like to do today?</label>

    <input
      #newItem
      placeholder="add an item"
      (keyup.enter)="addItem(newItem.value); newItem.value = ''"
      class="lg-text-input"
      id="addItemInput"
    />
    
    <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>

    <ul>
      <!-- <li *ngFor="let item of items">{{item.description}}</li> -->
      <li *ngFor="let item of items"><app-item (remove)="remove(item)" [item]="item"></app-item></li>
    </ul>
  </div>
  `,   
  */
  styles: ['h1 { color: blue; }'],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = "To Do List";

  filter: "all" | "active" | "done" = "active";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ] as Item[];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  // 這個 addItem() 方法使用了陣列方法的 unshift() 來添加一個新的項目到陣列的開頭位置與列表的頂端。 
  // 又或者，你也可以使用 push() 來添加一個新的項目到陣列的最後位置與列表的尾端
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
   

}
