import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit {
  
  @Input() gameType:string = "";
  @Input() gamePrice:string = "";  
  ps5:boolean=true;

  constructor() {}

  ngOnInit(): void {
  
  }

  ngOnChanges() {
    debugger
    this.ps5 = (this.gameType.toUpperCase().includes("PS5"));    
    console.log("----");
    console.log(this.ps5);    
  }
}
