import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  verificarCampos(email, senha){
    if(email == ''){
      alert("E-mail não foi preenchido");
      return false;
    }
    else if(senha == ''){
      alert("Senha não foi preenchido");
      return false;
    }
    else{
      return true;
    }
  }

  constructor() { }
}
