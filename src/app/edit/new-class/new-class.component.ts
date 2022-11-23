import { Component, Input } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { Dice } from 'src/app/util';
import CharacterClass from 'src/models/CharacterClass';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.scss']
})
export class NewClassComponent {
  @Input() characterClass: CharacterClass = {
    name: 'New Class',
    hitDie: 6,
    features: [],
    magicTalents: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, },
    spellPoints: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, },
    savingThrows: [['Wisdom']],
    specializations: {},
  }

  dice = Dice

  constructor(
    private classService: ClassService,
  ) {}

  test() {
    console.log(this.characterClass)
  }

  create() {
    this.classService.create(this.characterClass).subscribe(res => console.log(res))
  }

}
