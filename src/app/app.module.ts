import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './display/character/character.component';
import { NewCharacterComponent } from './edit/new-character/new-character.component';
import { HomeComponent } from './home/home.component';
import { NewTraditionComponent } from './edit/new-tradition/new-tradition.component';
import { NewClassComponent } from './edit/new-class/new-class.component';
import { NewSphereComponent } from './edit/new-sphere/new-sphere.component';
import { NewItemComponent } from './edit/new-item/new-item.component';
import { ItemComponent } from './display/item/item.component';
import { CharacterClassComponent } from './display/character-class/character-class.component';
import { SphereComponent } from './display/sphere/sphere.component';
import { TraditionComponent } from './display/tradition/tradition.component';
import { RecordEditorComponent } from './core/record-editor/record-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    NewCharacterComponent,
    HomeComponent,
    NewTraditionComponent,
    NewClassComponent,
    NewSphereComponent,
    NewItemComponent,
    ItemComponent,
    CharacterClassComponent,
    SphereComponent,
    TraditionComponent,
    RecordEditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
