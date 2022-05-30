import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() totalpages = 0;
  @Input() page = 0;
  @Output() onChange = new EventEmitter<number>();
  items!: number[];
  delta = 2;
  constructor() {}

  ngOnInit(): void {
    let before = this.CalBeforePage();
    let after = this.CalAfterPage();
    this.items = this.getRange(before, after);
  }

  CalBeforePage() {
    let _before = this.page - this.delta;
    return this.page > 1 && this.page > this.delta ? _before : 1;
  }
  CalAfterPage() {
    let _after = this.page + this.delta;
    return _after < this.totalpages ? _after : this.totalpages;
  }

  getRange(start: number, end: number) {
    return Array.from(Array(end - start + 1).keys()).map(
      (x) => x + Number(start)
    );
  }
  onLinkClick(item: number) {
    this.page = item;
    let before = this.CalBeforePage();
    let after = this.CalAfterPage();
    this.items = this.getRange(before, after);
    this.onChange.emit(item);
  }
}
