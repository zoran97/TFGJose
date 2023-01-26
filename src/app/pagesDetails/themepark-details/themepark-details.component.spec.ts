import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeparkDetailsComponent } from './themepark-details.component';

describe('ThemeparkDetailsComponent', () => {
  let component: ThemeparkDetailsComponent;
  let fixture: ComponentFixture<ThemeparkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeparkDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeparkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
