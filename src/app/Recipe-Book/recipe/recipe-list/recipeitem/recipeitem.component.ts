import { Component, Input } from '@angular/core';
import { RecipeData } from '../../recipe-data.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrl: './recipeitem.component.css'
})
export class RecipeitemComponent {
  @Input() recipe: RecipeData;
  @Input() index: number;

  constructor(private recipeService: RecipeService) { }

  onSelected() {
    this.recipeService.selectedRecipe.next(this.recipe);
  }
}
