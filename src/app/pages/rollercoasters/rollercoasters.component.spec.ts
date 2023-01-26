import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollercoastersComponent } from './rollercoasters.component';

describe('RollercoastersComponent', () => {
  let component: RollercoastersComponent;
  let fixture: ComponentFixture<RollercoastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollercoastersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollercoastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
