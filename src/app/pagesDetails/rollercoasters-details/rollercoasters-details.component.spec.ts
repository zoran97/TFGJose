import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollercoastersDetailsComponent } from './rollercoasters-details.component';

describe('RollercoastersDetailsComponent', () => {
  let component: RollercoastersDetailsComponent;
  let fixture: ComponentFixture<RollercoastersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollercoastersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollercoastersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
