import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  inputInvalid = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){ 
    if (this.loginForm.value.email === 'josel.simancas94@gmail.com' && this.loginForm.value.password === '1234'){ 
      console.log('Form---', this.loginForm.value);
      this.router.navigate(['/themepark'])
    } else {
      this.inputInvalid = true;
    }
  }
}
