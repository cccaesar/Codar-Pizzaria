import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  verificarPreenchimento(nome, email, senha, senha2){
    if(nome == ''){
      alert("Nome não foi preenchido");
      return false;
    }
    else if(email == ''){
      alert("E-mail não foi preenchido");
      return false;
    }
    else if(senha == ''){
      alert("Senha não foi preenchido");
      return false;
    }
    else if(senha2 == ''){
      alert("A senha não foi confirmada");
      return false;
    }
    return true;
  }

  constructor() { }
}
