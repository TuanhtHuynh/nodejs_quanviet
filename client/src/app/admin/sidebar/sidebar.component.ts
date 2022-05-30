import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
  toggle = true;
  SidebarMenus!: any[];

  ngOnInit(): void {
    this.SidebarMenus = [
      {
        icon: 'fa-boxes-alt',
        routerLink: 'danhmuc',
        name: 'Danh mục',
      },
      {
        icon: 'fa-list-alt',
        routerLink: 'sanpham',
        name: 'Sản phẩm',
      },
      {
        icon: 'fa-user',
        routerLink: 'user',
        name: 'Thành viên',
      },
      {
        icon: 'fa-bars',
        routerLink: 'menu',
        name: 'Menu',
      },
    ];
  }

  toggleButton() {
    this.toggle = !this.toggle;
  }
}
