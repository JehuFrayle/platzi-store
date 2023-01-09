import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private authService:AuthService,
  private tokenService: TokenService, private router:Router) { }
  public formLogin!: FormGroup;

  validMail = true;
  validPass = true;
  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]]
    })
  }
  login() {
    const email = this.formLogin.get('mail')?.value;
    const password = this.formLogin.get('pass')?.value;

    this.authService.login(email, password)
    .subscribe((res) => {
      this.tokenService.saveToken(res.access_token);
      this.authService.updateProfile();
      this.router.navigate([`/home`]);
    })
  }
}
