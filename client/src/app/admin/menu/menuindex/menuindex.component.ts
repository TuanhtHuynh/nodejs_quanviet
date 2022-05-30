import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menus.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menuindex',
  templateUrl: './menuindex.component.html',
  styleUrls: ['./menuindex.component.css'],
})
export class MenuindexComponent implements OnInit {
  listMenus!: Menu[];
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.menuService
      .listMenu()
      .subscribe((data: any) => (this.listMenus = data.menus));
  }

  onDelete(id: number, name: string) {
    if (confirm('bạn muốn xoá ' + name)) {
      this.menuService.deleteMenu(id).subscribe(() => this.loadData());
    }
  }
}
