import { Component, OnInit } from '@angular/core';
import { RecipeData } from './recipe-data.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }
}
