import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMegaHeaderComponent } from './table-mega-header.component';

describe('TableMegaHeaderComponent', () => {
  let component: TableMegaHeaderComponent;
  let fixture: ComponentFixture<TableMegaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMegaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMegaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
