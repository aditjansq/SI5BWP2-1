import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // registerForm : FormGroup;
  submitted : boolean = false;
  executeState : string = "";
  showSpinner = false;
  private registerSub : Subscription = new Subscription();
}
