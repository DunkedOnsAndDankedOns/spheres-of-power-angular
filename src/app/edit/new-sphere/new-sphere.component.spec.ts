import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSphereComponent } from './new-sphere.component';

describe('NewSphereComponent', () => {
  let component: NewSphereComponent;
  let fixture: ComponentFixture<NewSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSphereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
