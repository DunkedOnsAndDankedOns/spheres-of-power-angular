import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-record-editor',
  templateUrl: './record-editor.component.html',
  styleUrls: ['./record-editor.component.scss']
})
export class RecordEditorComponent {
  @Input() record: Record<any, any> = {}

  constructor() {
    console.log(this.record)
  }

  get entries() {
    return Object.entries(this.record)
  }
}
