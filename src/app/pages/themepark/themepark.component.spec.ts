import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeparkComponent } from './themepark.component';

describe('ThemeparkComponent', () => {
  let component: ThemeparkComponent;
  let fixture: ComponentFixture<ThemeparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeparkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
