import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  estilizarTitulo = false;

  //botaoClass = 'botao vermelho';
  //ou
  //botaoClass = ['botao', 'verde'];
  //ou
  botaoClass = {botao: true, verde:true};

  message = 'Meu primeiro Data Binding!';

  imagePath = 'assets/1718743212_bdp_logo-site2.webp';

  isDisabled = true;

  ariaLabel = 'Fechar';

  nomeCliente = "";

  botaoFechar = `
  
    border: 1px solid;
    border-radius: 45px;
    padding: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    aling-items: center
    `;

  enableCloseButton() {
    this.isDisabled = !this.isDisabled;
  }

  aplicarEstiloTitulo() {
    this.estilizarTitulo = !this.estilizarTitulo;

    this.botaoClass = {
      botao: true,
      verde: !this.botaoClass.verde
    };
  }

}