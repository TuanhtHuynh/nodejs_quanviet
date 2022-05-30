import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMegaContentComponent } from './table-mega-content.component';

describe('TableMegaContentComponent', () => {
  let component: TableMegaContentComponent;
  let fixture: ComponentFixture<TableMegaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMegaContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMegaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
