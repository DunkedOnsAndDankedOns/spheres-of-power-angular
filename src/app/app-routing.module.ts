import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCharacterComponent } from './edit/new-character/new-character.component';
import { NewClassComponent } from './edit/new-class/new-class.component';
import { NewItemComponent } from './edit/new-item/new-item.component';
import { NewSphereComponent } from './edit/new-sphere/new-sphere.component';
import { NewTraditionComponent } from './edit/new-tradition/new-tradition.component';
import { CharacterClassComponent } from './display/character-class/character-class.component';
import { CharacterComponent } from './display/character/character.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './display/item/item.component';
import { SphereComponent } from './display/sphere/sphere.component';
import { TraditionComponent } from './display/tradition/tradition.component';

const routes: Routes = [
  { path: 'item/new', component: NewItemComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'sphere/new', component: NewSphereComponent },
  { path: 'sphere/:id', component: SphereComponent },
  { path: 'class/new', component: NewClassComponent },
  { path: 'class/:id', component: CharacterClassComponent },
  { path: 'tradition/new', component: NewTraditionComponent },
  { path: 'tradition/:id', component: TraditionComponent },
  { path: 'character/new', component: NewCharacterComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
