import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './Components/car/car.component';
import { CardtoComponent } from './Components/cardto/cardto.component';

const routes: Routes = [
  {path : "",pathMatch:"full", component:CarComponent},
  {path : "cars", component:CarComponent},
  {path : "cars/brand/:brandId", component:CarComponent},
  {path : "cars/color/:colorId", component:CarComponent},
  {path:"cardto/:carId",component:CardtoComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
