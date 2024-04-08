import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyNumberComponent } from './family-number.component';

describe('FamilyNumberComponent', () => {
  let component: FamilyNumberComponent;
  let fixture: ComponentFixture<FamilyNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
