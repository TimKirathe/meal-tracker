import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  @Output() addNewMeal = new EventEmitter<Meal>();

  meals: Meal[] = [];
  meal: Meal;
  mealId: number = 0;


  formSubmit(value: any) {
    this.meal = new Meal(value.mealName, parseInt(value.mealCalories), value.mealDetails)
    this.mealId += 1;
    this.meal.id = this.mealId;
    //console.log(this.meal.id)
    //this.meals.push(this.meal)
    //console.log(this.meals);
  }

  submitMeal() {
    this.addNewMeal.emit(this.meal)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
