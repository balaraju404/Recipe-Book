import { Component, Input, OnInit } from '@angular/core';
import { RecipeData } from '../recipe-data.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrl: './recipedetail.component.css'
})
export class RecipedetailComponent implements OnInit {
  recipe: { name: string, description: string, imagepath: string, ingredients: Ingredient[] };
  id: number = this.route.snapshot.params['id'];

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  addToSL(recipe: RecipeData) {
    this.recipeService.addIngToSL(recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
} 
