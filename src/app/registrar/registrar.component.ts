import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistrarService } from './registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  public verificarCampos;

  constructor(public registrarService: RegistrarService, private router: Router) { 
    this.verificarCampos = registrarService.verificarPreenchimento
  }


  registrarf(nome, email, senha, senha2){
    const preenchido: Boolean = this.verificarCampos(nome, email, senha, senha2);
    if( preenchido )
    {
      this.router.navigate(['/']);
      console.log("AAAAAA");
    }

  }

  

  ngOnInit(): void {
  }

}
