import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Character from 'src/models/Character';
import Tradition from 'src/models/Tradition';
import { CharacterService } from '../character.service';
import { TraditionService } from '../tradition.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {
  character: Character = {
    name: 'New Character',
    race: '',
    speed: {
      Walk: 30,
    },
    armorClass: 10,
    stats: {
      Strength: { score: 10, modifier: 0 },
      Dexterity: { score: 10, modifier: 0 },
      Constitution: { score: 10, modifier: 0 },
      Wisdom: { score: 10, modifier: 0 },
      Intelligence: { score: 10, modifier: 0 },
      Charisma: { score: 10, modifier: 0 },
    },
    levels: {},
    currency: {},
    hitPoints: {
      rolled: 0,
      max: 0,
      current: 0,
      temporary: 0,
    },
    hitDiceCurrent: {},
    spellPool: {
      current: 0,
      max: 0,
    },
    sphereIds: [],
    traditionId: '',
    inventoryItemIds: [],
    background: '',
  }

  traditions: Tradition[] = []

  constructor(
    private characterService: CharacterService,
    private traditionService: TraditionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.traditionService.getAll().subscribe(traditions => {
      if (!traditions.result || !traditions.result.length) {
        this.router.navigate(['home'])
        alert('You need to create a tradition first')
        return
      }
      this.traditions = traditions.result
    })
  }

  test() {
    console.log(this.character)
  }

  create() {
    this.characterService.create(this.character as Required<Character>)
  }

}
