import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscendingOrNotComponent } from './ascending-or-not.component';

describe('AscendingOrNotComponent', () => {
  let component: AscendingOrNotComponent;
  let fixture: ComponentFixture<AscendingOrNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscendingOrNotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscendingOrNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
