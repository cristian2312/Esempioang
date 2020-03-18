import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-vita',
  templateUrl: './ciclo-vita.component.html',
  styleUrls: ['./ciclo-vita.component.scss']
})
export class CicloVitaComponent implements OnInit {
  constructor() { }

  ngOnChanges(changes: SimpleChanges):void{
    if(changes){
      console.log('changes: '+JSON.stringify(changes));
      if(changes['primitiva']!=null && changes['primitiva'].previousValue !== changes['primitiva'].currentValue && !changes['primitiva'].firstChange){
        console.log('è stato modficato primitiva');
      }
      if(changes['name']!=null && changes['name'].previousValue !== changes['name'].currentValue && !changes['name'].firstChange){
        console.log('è stato modficato name');
      } 
    }
  }
  ngOnInit(): void {
  }

}
