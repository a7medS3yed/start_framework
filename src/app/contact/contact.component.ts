import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  value:string = '';
  isHidden:boolean = false;

  checkValue() {
    this.isHidden = this.value.trim() === '';
  }
}

