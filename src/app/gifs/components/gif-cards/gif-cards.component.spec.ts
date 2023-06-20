import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifCardsComponent } from './gif-cards.component';

describe('GifCardsComponent', () => {
  let component: GifCardsComponent;
  let fixture: ComponentFixture<GifCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifCardsComponent]
    });
    fixture = TestBed.createComponent(GifCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
