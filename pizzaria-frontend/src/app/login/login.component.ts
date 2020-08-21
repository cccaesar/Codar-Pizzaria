import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService] ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public verificarCampos;

  constructor(public loginService: LoginService) { 
    this.verificarCampos = loginService.verificarCampos
    }

  loginf(email, senha){
    let preenchido = this.verificarCampos(email,senha);
    if(preenchido){
      
    }
  }

  

  ngOnInit(): void {
  }

}
