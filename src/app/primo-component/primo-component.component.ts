import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-primo-component',
  templateUrl: './primo-component.component.html',
  styleUrls: ['./primo-component.component.scss']
})
export class PrimoComponentComponent implements OnInit {
  @Input('inputIngresso')
  parin : string;
nameToDisplay: string;

  @Input()
  set name(valueInput: string){
    this.nameToDisplay= valueInput + 'suffisso';
  }
items =[1,2];
  variabile ='valore';

    myDate: Date=new Date();
  
    oggetto ={
      chiave: 'chiaveoggetto'
    }
   
    varSwitch= 1;

  constructor() { 
    switch(this.varSwitch){
      case 1:{
        console.log('primo valore');
        break;
      }
      case 2:{
        console.log('secondo valore');
        break;
      }
      case 3:{
        console.log('primo valore');
        break;
      }
      case 4:{
        console.log('quarto valore');
        break;
      }

    }


  }
  incrementaSwitch() {
    if (this.varSwitch === 4) {
      this.varSwitch = 1;
    } else {
      this.varSwitch++;
    }
  }

  ngOnChanges(changes: SimpleChanges):void{
    if(changes){
      console.log('changes: '+JSON.stringify(changes));
      if(changes['parin']!=null && changes['parin'].previousValue !== changes['parin'].currentValue && !changes['parin'].firstChange){
        console.log('è stato modficato parin');
      }
      if(changes['name']!=null && changes['name'].previousValue !== changes['name'].currentValue && !changes['name'].firstChange){
        console.log('è stato modficato name');
      } 
    }
  }
  ngOnInit(): void {
    console.log(' oninit: ' +this.nameToDisplay);
  }


}
