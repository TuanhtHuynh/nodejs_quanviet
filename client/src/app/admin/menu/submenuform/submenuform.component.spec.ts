import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuformComponent } from './submenuform.component';

describe('SubmenuformComponent', () => {
  let component: SubmenuformComponent;
  let fixture: ComponentFixture<SubmenuformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmenuformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
