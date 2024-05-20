import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { RecipeData } from '../recipe-data.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrl: './recipelist.component.css',
})
export class RecipelistComponent implements OnInit, OnDestroy {
  recipes: RecipeData[] = [];
  subscription: Subscription;

  isLoading: boolean = false

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.fetchingRecipesStatus.subscribe(status => {
      this.isLoading = status;
      if (this.isLoading) {
        this.recipes = []
      }
    })
    this.subscription = this.recipeService.recipeChanged.subscribe((recipes: RecipeData[]) => {

      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
