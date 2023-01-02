import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
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
    console.log('Enviar info');
  }
}
