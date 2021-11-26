import { Injectable } from '@angular/core';
import { Meal } from './meal';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

 meals: Meal[] = [];

  getMeals(meal: any) {
    this.meals.push(meal)
  }

  constructor(private http: HttpClient) { }

  getCurrentMeal(id) {
    return this.http.get(`${environment.url}${id}`)
  }
}
