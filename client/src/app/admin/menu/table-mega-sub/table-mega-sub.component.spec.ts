import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMegaSubComponent } from './table-mega-sub.component';

describe('TableMegaSubComponent', () => {
  let component: TableMegaSubComponent;
  let fixture: ComponentFixture<TableMegaSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMegaSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMegaSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
