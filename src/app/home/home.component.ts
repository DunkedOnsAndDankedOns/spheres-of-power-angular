import { Component, OnInit } from '@angular/core';
import Character from 'src/models/Character';
import CharacterClass from 'src/models/CharacterClass';
import Item from 'src/models/Item';
import Sphere from 'src/models/Sphere';
import Tradition from 'src/models/Tradition';
import { CharacterService } from '../character.service';
import { ClassService } from '../class.service';
import { ItemService } from '../item.service';
import { SphereService } from '../sphere.service';
import { TraditionService } from '../tradition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  items: Item[] = [];
  spheres: Sphere[] = [];
  traditions: Tradition[] = [];
  classes: CharacterClass[] = [];

  constructor(
    public characterService: CharacterService,
    public itemService: ItemService,
    public sphereService: SphereService,
    public traditionService: TraditionService,
    public classService: ClassService,
  ) { }

  ngOnInit() {
    this.characterService.getAll().subscribe(res => { this.characters = res.result })
    this.itemService.getAll().subscribe(res => { this.items = res.result })
    this.sphereService.getAll().subscribe(res => { this.spheres = res.result })
    this.traditionService.getAll().subscribe(res => { this.traditions = res.result })
    this.classService.getAll().subscribe(res => { this.classes = res.result })
  }
}
