import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import Character from 'src/models/Character';
import CharacterClass from 'src/models/CharacterClass';
import Tradition from 'src/models/Tradition';
import { CharacterService } from '../../services/character.service';
import { TraditionService } from '../../services/tradition.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {
  @Input() character: Character = {
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
    classIds: [],
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
  classes: CharacterClass[] = []

  constructor(
    private characterService: CharacterService,
    private traditionService: TraditionService,
    private classService: ClassService,
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
    this.classService.getAll().subscribe(classes => {
      if (!classes.result || !classes.result.length) {
        this.router.navigate(['home'])
        alert('You need to create a class first')
        return
      }
      this.classes = classes.result
    })
  }

  addClass() {
    this.character.classIds.push('')
  }

  test() {
    console.log(this.character)
  }

  create() {
    this.characterService.create(this.character).subscribe(res => console.log(res))
  }

}
