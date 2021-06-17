import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService] ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public verificarCampos;

  constructor(public loginService: LoginService, private router: Router) { 
    this.verificarCampos = loginService.verificarCampos
    }

  loginf(email, senha){
    let preenchido: Boolean = this.verificarCampos(email,senha);
    if(preenchido)
      this.router.navigate(['/home']);

  }

  

  ngOnInit(): void {
  }

}
