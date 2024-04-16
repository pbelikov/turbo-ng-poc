import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurboLibTwoComponent } from './turbo-lib-two.component';

describe('TurboLibTwoComponent', () => {
  let component: TurboLibTwoComponent;
  let fixture: ComponentFixture<TurboLibTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurboLibTwoComponent]
    });
    fixture = TestBed.createComponent(TurboLibTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
