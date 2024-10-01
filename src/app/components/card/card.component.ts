import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
 // standalone: true,
 // imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input() gameCover:string = ""

  //label
  @Input() gameLabel:string = '';

  //priccing
  @Input() gameType:string = "";
  @Input() gamePrice:string = "";  

  constructor() {}

  ngOnInit(): void {
  
  }

}
