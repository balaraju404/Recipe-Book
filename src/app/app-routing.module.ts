import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './Recipe-Book/recipe/recipe.component';
import { ShoppingListComponent } from './Recipe-Book/shopping-list/shopping-list.component';
import { RecipedetailComponent } from './Recipe-Book/recipe/recipedetail/recipedetail.component';
import { RecipeStartComponent } from './Recipe-Book/recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './Recipe-Book/recipe/recipe-edit/recipe-edit.component';
import { RecipesResolverservice } from './Recipe-Book/recipe/recipes-resolver.service';
import { AuthComponent } from './Recipe-Book/auth/auth.component';
import { AuthGuard } from './Recipe-Book/auth/auth.guard';

const appRoutes: Routes = [
    { path: "", redirectTo: '/recipes', pathMatch: "full" },
    {
        path: "recipes", component: RecipeComponent, children: [
            { path: "", component: RecipeStartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id", component: RecipedetailComponent, resolve: [RecipesResolverservice] },
            { path: ":id/edit", component: RecipeEditComponent, resolve: [RecipesResolverservice] }
        ],
        canActivate: [AuthGuard] // Add AuthGuard here to restrict access
    },
    { path: "shopping-list", component: ShoppingListComponent },
    { path: "auth", component: AuthComponent, canActivate: [AuthGuard] } // Also add AuthGuard here to allow access to this route only when not logged in
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
