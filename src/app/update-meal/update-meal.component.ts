import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MealServiceService} from '../meal-service.service';
@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.component.html',
  styleUrls: ['./update-meal.component.css']
})
export class UpdateMealComponent implements OnInit {

  constructor(private route: ActivatedRoute, private meal: MealServiceService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id'])
    this.meal.getCurrentMeal(this.route.snapshot.params['id']).subscribe((result) => {
      console.log(result)
    })
  }

}
