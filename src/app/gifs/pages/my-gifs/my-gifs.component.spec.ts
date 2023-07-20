import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGifsComponent } from './my-gifs.component';

describe('MyGifsComponent', () => {
  let component: MyGifsComponent;
  let fixture: ComponentFixture<MyGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyGifsComponent]
    });
    fixture = TestBed.createComponent(MyGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
