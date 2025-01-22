import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-ees',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './ees.component.html',
  styleUrl: './ees.component.scss'
})
export class EesComponent {
  hoveredIndex: number | null = null;

  onMouseOver(index: number) {
    this.hoveredIndex = index; // Highlight the hovered row
  }

  onMouseOut() {
    this.hoveredIndex = null; // Reset the hover effect
  }


  // ----------
  // form data 


  eesForm:FormGroup= new FormGroup({
    username:new FormControl(null,[ Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^(?!.*[_.]{2})[a-zA-Z._]{3,20}$/)
    ]),
    contactNumber:new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?:\+?\d{1,4}[\s-]?)?(?:\(?\d{1,4}\)?[\s-]?)?\d{7,10}$/)
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    companyName: new FormControl(null, [ Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^(?!.*[_.]{2})[a-zA-Z._]{3,20}$/)
    ])
  
  })
}
