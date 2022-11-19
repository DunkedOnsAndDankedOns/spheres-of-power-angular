import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTraditionComponent } from './new-tradition.component';

describe('NewTraditionComponent', () => {
  let component: NewTraditionComponent;
  let fixture: ComponentFixture<NewTraditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTraditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTraditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
