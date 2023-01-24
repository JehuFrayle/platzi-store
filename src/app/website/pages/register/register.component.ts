import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CreateUserDTO } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private usersService:UsersService,
    private authService:AuthService, private tokenService:TokenService, private router:Router) { }
  public formRegister!: FormGroup;

  validMail = true;
  validPass = true;

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get('pass')?.value;
    const confirmPass = group.get('cpass')?.value;
    return pass === confirmPass ? null : { notSame: true }
  }
  ngOnInit() {
    if(this.tokenService.getToken()) {
      this.router.navigate([`/home`]);
    }
    this.formRegister = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
      user: ['', [Validators.minLength(4), Validators.required]],
      cpass: ['', []]
    }, { validators: this.checkPasswords });
  }
  signup() {
    const data: CreateUserDTO = {
      name: this.formRegister.get('user')?.value,
      email: this.formRegister.get('mail')?.value,
      password: this.formRegister.get('pass')?.value,
    }
    this.usersService.create(data)
    .subscribe((res) => {
      console.log('Registro exitoso');
      console.log(res);
      this.authService.loginAndProfile(res.email, res.password)
      .subscribe(() => {
        this.router.navigate([`/home`]);
      })
    })
  }
}
