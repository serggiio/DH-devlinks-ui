import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dv-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './dv-register.component.html',
  styleUrl: './dv-register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DvRegisterComponent {
  registerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.registerForm = this._formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8)]
      ],
      confirmPassword: [
        '',
        [Validators.required]
      ]
    }, {validators: this.validateConfirmPassword});
  }

  private validateConfirmPassword(form: FormGroup): { passwordsMismatch: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {passwordsMismatch: true};
  }

  registerSubmit(): void {
    if (this.registerForm.valid) {
      const {email, password} = this.registerForm.value;
    }
  }
}
