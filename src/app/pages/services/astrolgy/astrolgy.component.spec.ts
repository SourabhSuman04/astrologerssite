import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrolgyComponent } from './astrolgy.component';

describe('AstrolgyComponent', () => {
  let component: AstrolgyComponent;
  let fixture: ComponentFixture<AstrolgyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstrolgyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrolgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
