import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared/jogo-da-velha.service';



@NgModule({
  declarations: [
    JogoDaVelhaComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ //Nescessário pois não irá haver rotas
    JogoDaVelhaComponent
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
