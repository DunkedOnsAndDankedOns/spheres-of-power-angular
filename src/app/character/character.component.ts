import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Character from 'src/models/Character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: Character | undefined

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterService.get(params['id']).subscribe(character => {
        this.character = character.result
      })
    })
  }
}
