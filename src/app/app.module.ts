import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NewTraditionComponent } from './new-tradition/new-tradition.component';
import { NewClassComponent } from './new-class/new-class.component';
import { NewSphereComponent } from './new-sphere/new-sphere.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemComponent } from './item/item.component';
import { CharacterClassComponent } from './character-class/character-class.component';
import { SphereComponent } from './sphere/sphere.component';
import { TraditionComponent } from './tradition/tradition.component';
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
