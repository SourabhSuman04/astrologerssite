import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewaanhumsafarComponent } from './jewaanhumsafar.component';

describe('JewaanhumsafarComponent', () => {
  let component: JewaanhumsafarComponent;
  let fixture: ComponentFixture<JewaanhumsafarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewaanhumsafarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewaanhumsafarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
