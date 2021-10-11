import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDescComponent } from './welcome-desc.component';

describe('WelcomeDescComponent', () => {
  let component: WelcomeDescComponent;
  let fixture: ComponentFixture<WelcomeDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
