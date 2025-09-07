import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeralogyComponent } from './numeralogy.component';

describe('NumeralogyComponent', () => {
  let component: NumeralogyComponent;
  let fixture: ComponentFixture<NumeralogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeralogyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeralogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
