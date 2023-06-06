import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTelComponent } from './card-tel.component';

describe('CardTelComponent', () => {
  let component: CardTelComponent;
  let fixture: ComponentFixture<CardTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTelComponent]
    });
    fixture = TestBed.createComponent(CardTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
