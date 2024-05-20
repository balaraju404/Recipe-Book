import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// import { TodoComponent } from './todo-app/todo.component';
import { RecipeComponent } from './Recipe-Book/recipe/recipe.component';
import { RecipelistComponent } from './Recipe-Book/recipe/recipe-list/recipelist.component';
import { RecipedetailComponent } from './Recipe-Book/recipe/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './Recipe-Book/recipe/recipe-list/recipeitem/recipeitem.component';
import { ShoppingListComponent } from './Recipe-Book/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Recipe-Book/shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './Recipe-Book/header/header.component';

import { DropdownDirective } from './Recipe-Book/shared/dropdown.directive';
import { RecipeService } from './Recipe-Book/recipe/recipe.service';
import { ShoppingListService } from './Recipe-Book/shopping-list/shopping-list.service';
import { RecipeStartComponent } from './Recipe-Book/recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './Recipe-Book/recipe/recipe-edit/recipe-edit.component';
import { AuthComponent } from './Recipe-Book/auth/auth.component';
import { LoadSpinnerComponent } from './Recipe-Book/shared/load-spinner/load-spinner.component';
import { AuthInterceptorService } from './Recipe-Book/auth/auth-interceptor.service';
import { AuthGuard } from './Recipe-Book/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    // TodoComponent
    RecipeComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadSpinnerComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [RecipeService, ShoppingListService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
