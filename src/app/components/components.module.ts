import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './../components/menu-bar/menu-bar.component'
import { CardComponent } from './card/card.component';
import { CardLabelComponent } from  './card/card-label/card-label.component';
import { CardPricingComponent } from  './card/card-pricing/card-pricing.component';

@NgModule({
  declarations: [MenuBarComponent, CardComponent, CardLabelComponent, CardPricingComponent],
  imports: [
    CommonModule,
  ],
  exports: [MenuBarComponent, CardComponent]
})
export class ComponentsModule { }
