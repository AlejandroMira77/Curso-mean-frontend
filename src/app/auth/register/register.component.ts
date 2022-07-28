import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formSubmited = false;

  public registerForm = this.fb.group({
    name: [ '', Validators.required ],
    email: [ '', Validators.required ],
    password: [ '', Validators.required ],
    password2: [ '', Validators.required ],
    terms: [ false, Validators.required ]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  createUser() {
    console.log(this.registerForm.value);
    this.formSubmited = true;
  }

  invalidField(field: string): boolean {
    if (this.registerForm.get(field)?.invalid && this.formSubmited) {
      return true;
    }
    return false;
  }

}
