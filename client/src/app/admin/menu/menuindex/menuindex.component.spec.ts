import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuindexComponent } from './menuindex.component';

describe('MenuindexComponent', () => {
  let component: MenuindexComponent;
  let fixture: ComponentFixture<MenuindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
