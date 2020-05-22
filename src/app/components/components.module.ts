import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

@NgModule({
  declarations: [ RestauranteComponent, RestaurantesComponent],
  imports: [CommonModule, IonicModule ],
  exports: [RestaurantesComponent],
})
export class ComponentsModule {}