import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremarrigeComponent } from './premarrige.component';

describe('PremarrigeComponent', () => {
  let component: PremarrigeComponent;
  let fixture: ComponentFixture<PremarrigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremarrigeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremarrigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
