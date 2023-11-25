import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyceComponent } from './lifecyce.component';

describe('LifecyceComponent', () => {
  let component: LifecyceComponent;
  let fixture: ComponentFixture<LifecyceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
