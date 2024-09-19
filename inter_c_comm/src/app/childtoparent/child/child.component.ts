import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output()
  childEvent = new EventEmitter<string>();

  childItem! : string;

  addItem():void{
    this.childEvent.emit(this.childItem)
  }


}