import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primo-component',
  templateUrl: './primo-component.component.html',
  styleUrls: ['./primo-component.component.scss']
})
export class PrimoComponentComponent implements OnInit {
  @Input()
  parin : string;
items =[1,2];
  variabile ='valore';

    myDate: Date=new Date();
  
    oggetto ={
      chiave: 'chiaveoggetto'
    }
   
  constructor() { }

  ngOnInit(): void {
  }

}
