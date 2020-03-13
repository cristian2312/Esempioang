import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  @Output()
  clickEvent: EventEmitter<string> = new EventEmitter();

    titolo='iniziale';

    mostraRosso=false;
  constructor() { }

  ngOnInit(): void {
  }

  inputEvent(target){
    this.titolo=target.value;
  }
  gestioneClick(event){
    console.log('ciao');
    this.clickEvent.emit(this.titolo);
    this.titolo= 'dopoclick';
    this.mostraRosso=!this.mostraRosso;
   
  }
  oggettoClassi={
    prova: this.mostraRosso,
    altro: !this.mostraRosso,
  }
  
}
