import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menus.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.css'],
})
export class MegamenuComponent implements OnInit {
  listMenus!: Menu[];
  isOpen!: boolean;

  constructor(private menuService: MenuService) {}
  submenus!: any[];

  ngOnInit(): void {
    this.isOpen = false;
    this.menuService.listMenu().subscribe((data: any) => {
      this.listMenus = data.menus;
    });
  }

  toggleMega(submenus: any) {
    if (submenus.length > 0) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }
  hideMega() {
    setTimeout(() => {
      this.isOpen = false;
    }, 200);
  }
}
