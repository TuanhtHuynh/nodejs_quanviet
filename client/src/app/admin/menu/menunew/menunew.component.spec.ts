import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunewComponent } from './menunew.component';

describe('MenunewComponent', () => {
  let component: MenunewComponent;
  let fixture: ComponentFixture<MenunewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenunewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenunewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
