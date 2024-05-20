import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipe/recipe.service";
import { RecipeData } from "../recipe/recipe-data.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeData() {
        let recipes = this.recipeService.getRecipes();
        this.http.put('https://recipe-book-82d0a-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        this.recipeService.fetchingRecipesStatus.next(true)
        return this.http.get<RecipeData[]>
            ('https://recipe-book-82d0a-default-rtdb.firebaseio.com/recipes.json',)
            .pipe(
                map((recipes) => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                        }
                    })
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            )
    }
}