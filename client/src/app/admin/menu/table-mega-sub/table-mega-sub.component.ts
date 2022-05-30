import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-mega-sub',
  templateUrl: './table-mega-sub.component.html',
  styleUrls: ['./table-mega-sub.component.css'],
})
export class TableMegaSubComponent implements OnInit {
  @Input() submenus;
  constructor() {}

  ngOnInit(): void {}
}
