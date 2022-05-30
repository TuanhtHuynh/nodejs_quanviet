import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-mega-content',
  templateUrl: './table-mega-content.component.html',
  styleUrls: ['./table-mega-content.component.css'],
})
export class TableMegaContentComponent implements OnInit {
  @Input() listMenu;
  @Output() delete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete(id: any, name: any) {
    if (confirm(`Ban muốn xoá ${name}`)) {
      this.delete.emit(id);
    }
  }
}
