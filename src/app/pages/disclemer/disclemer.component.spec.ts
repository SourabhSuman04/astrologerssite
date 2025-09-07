import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclemerComponent } from './disclemer.component';

describe('DisclemerComponent', () => {
  let component: DisclemerComponent;
  let fixture: ComponentFixture<DisclemerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclemerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclemerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
