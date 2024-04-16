import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurboLibOneComponent } from './turbo-lib-one.component';

describe('TurboLibOneComponent', () => {
  let component: TurboLibOneComponent;
  let fixture: ComponentFixture<TurboLibOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurboLibOneComponent]
    });
    fixture = TestBed.createComponent(TurboLibOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
