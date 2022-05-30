import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaContentFormComponent } from './mega-content-form.component';

describe('MegaContentFormComponent', () => {
  let component: MegaContentFormComponent;
  let fixture: ComponentFixture<MegaContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaContentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
