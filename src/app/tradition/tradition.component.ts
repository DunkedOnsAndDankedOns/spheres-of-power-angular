import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tradition',
  templateUrl: './tradition.component.html',
  styleUrls: ['./tradition.component.scss']
})
export class TraditionComponent {
  constructor(private router: Router) {}
}
