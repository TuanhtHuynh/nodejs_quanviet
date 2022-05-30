import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu2formComponent } from './submenu2form.component';

describe('Submenu2formComponent', () => {
  let component: Submenu2formComponent;
  let fixture: ComponentFixture<Submenu2formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Submenu2formComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Submenu2formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
