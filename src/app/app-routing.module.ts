import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMealComponent } from './update-meal/update-meal.component';
import { MealDisplayComponent} from './meal-display/meal-display.component';

const routes: Routes = [
  {path: '', redirectTo: '/mealDetails', pathMatch: 'full'},
  {path: 'mealDetails', component: MealDisplayComponent},
  {path: 'update/:id', component: UpdateMealComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
