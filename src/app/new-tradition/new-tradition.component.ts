import { Component } from '@angular/core';
import Tradition from 'src/models/Tradition';
import Stat from 'src/types/Stat';
import { TraditionService } from '../tradition.service';
import { arrayToRecord } from '../util';

@Component({
  selector: 'app-new-tradition',
  templateUrl: './new-tradition.component.html',
  styleUrls: ['./new-tradition.component.scss']
})
export class NewTraditionComponent {
  tradition: Tradition = {
    name: 'New tradition',
    keyAbility: 'Wisdom',
    drawbacks: {},
    boons: {},
  }

  boons: {key: string, value: string}[] = []
  drawbacks: {key: string, value: string}[] = []

  keyAbilities: Stat[]

  constructor(private traditionService: TraditionService) {
    this.keyAbilities = [ 'Wisdom', 'Charisma', 'Intelligence' ]
  }

  private prepareCreate(): Tradition {
    return {
      ...this.tradition,
      drawbacks: arrayToRecord(this.drawbacks),
      boons: arrayToRecord(this.boons),
    }
  }

  create() {
    this.traditionService.create(this.prepareCreate()).subscribe(res => {
      console.log(res)
    })
  }

  newBoon() {
    this.boons.push({key: '', value: ''})
  }

  newDrawback() {
    this.drawbacks.push({key: '', value: ''})
  }

  test() {
    console.log(this.prepareCreate())
  }
}
