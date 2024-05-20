import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { RecipeData } from "./recipe-data.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()

export class RecipeService implements OnInit {
    recipeChanged = new Subject<RecipeData[]>();
    private recipeData: RecipeData[] = [];

    // private recipeData: RecipeData[] = [
    //     new RecipeData("Tasty Schnitzel - Just Awesome",
    //         "A super tasty schnitzel - just awesome",
    //         "https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png",
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]
    //     ),
    //     new RecipeData("Big Fat Burger",
    //         "What else you need to say ?",
    //         "https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png",
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Meat', 1)
    //         ]),
    // ];
    selectedRecipe = new Subject<RecipeData>();

    fetchingRecipesStatus = new BehaviorSubject<boolean>(false);

    constructor(private slService: ShoppingListService) { }

    ngOnInit() {
    }

    setRecipes(recipes: RecipeData[]) {
        this.fetchingRecipesStatus.next(false)
        this.recipeData = recipes;
        this.recipeChanged.next(this.recipeData.slice());
    }
    getRecipes() {
        return this.recipeData.slice();
    }
    getRecipe(index: number) {
        return this.recipeData[index];
    }

    addRecipe(newRecipe: RecipeData) {
        this.recipeData.push(newRecipe);
        this.recipeChanged.next(this.recipeData.slice());
    }
    updateRecipe(index: number, newRecipe: RecipeData) {
        this.recipeData[index] = newRecipe;
        this.recipeChanged.next(this.recipeData.slice());
    }
    deleteRecipe(index: number) {
        this.recipeData.splice(index, 1);
        this.recipeChanged.next(this.recipeData.slice());
    }
    addIngToSL(ingredients: Ingredient[]) {
        this.slService.addIngToSl(ingredients)
        console.log(ingredients);
    }
}