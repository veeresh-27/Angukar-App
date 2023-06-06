import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTelComponent } from './get-tel.component';

describe('GetTelComponent', () => {
  let component: GetTelComponent;
  let fixture: ComponentFixture<GetTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTelComponent]
    });
    fixture = TestBed.createComponent(GetTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
