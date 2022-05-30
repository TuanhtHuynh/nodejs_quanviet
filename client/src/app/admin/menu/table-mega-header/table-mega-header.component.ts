import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SubMenu } from 'src/app/models/submenu.model';

@Component({
  selector: 'app-table-mega-header',
  templateUrl: './table-mega-header.component.html',
  styleUrls: ['./table-mega-header.component.css'],
})
export class TableMegaHeaderComponent implements OnInit {
  @Input() listMenuHeader!: SubMenu[];
  @Output() ondelete = new EventEmitter();
  @Output() onaddmegu_item = new EventEmitter();
  rowIsOpen: boolean = false;
  rowIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onRowClick(index: number) {
    this.rowIsOpen = false;
    this.rowIsOpen = !this.rowIsOpen;
    this.rowIndex = index;
  }

  onDelete(id: any, name: string) {
    if (confirm('bạn muốn xoá ' + name)) {
      this.ondelete.emit(id);
    }
  }

  onAddMegaItem(id: any, menu_name: any) {
    this.onaddmegu_item.emit({ id, menu_name });
  }
}
