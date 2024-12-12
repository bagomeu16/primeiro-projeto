import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {



  classeBotaoVerde = 'botao verde';
  calsseBotaoVermelho =  'botao vermelho';

  aplicarEstiloVerde = false;
  estilosParagrafos = {'font-size': '14px', 'font-style': 'italic'}
  name = '';

  camposVisiveis = true;
  clientes = [
    {nome: 'Renato'},
    {nome: 'Rafael'},
    {nome: 'Jean'},
    {nome: 'Douglas'}
  ]

  aplicarEstilos() {
    this.aplicarEstiloVerde = !this.aplicarEstiloVerde;
  }
  
  alterarParaMaiusculo($event: any) {
    this.name = $event.toUperCase();
  }

  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;
  }
    
}
