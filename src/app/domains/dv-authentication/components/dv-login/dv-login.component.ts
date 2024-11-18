import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-dv-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './dv-login.component.html',
  styleUrl: './dv-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DvLoginComponent {
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ],
    });
  }

  loginSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login data:', email, password);
    }
  }
}
