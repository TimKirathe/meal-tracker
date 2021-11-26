import { Component, OnInit } from '@angular/core';
import { MealServiceService } from '../meal-service.service';
import { Meal } from '../meal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-display',
  templateUrl: './meal-display.component.html',
  styleUrls: ['./meal-display.component.css']
})
export class MealDisplayComponent implements OnInit {


  meals: Meal[] = [];

  pushMeal(meal) {
    this.meals.push(meal)
    //this.mealService.getMeals(this.meals)
  }


  constructor(private router: Router, public mealService: MealServiceService) {
  }


  ngOnInit(): void {
  }

}
