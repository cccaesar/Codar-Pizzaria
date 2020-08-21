import { Component, OnInit } from '@angular/core';

import { RegistrarService } from './registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  public verificarCampos;

  constructor(public registrarService: RegistrarService) { 
    this.verificarCampos = registrarService.verificarPreenchimento
  }


  registrarf(nome, email, senha, senha2){
    this.verificarCampos(nome, email, senha, senha2);
  }

  

  ngOnInit(): void {
  }

}
