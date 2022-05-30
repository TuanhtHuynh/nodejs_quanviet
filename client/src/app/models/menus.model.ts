export class Menu {
  _id: number;
  menu_name: string;
  url!: string;
  submenus: any[] = [];

  constructor(_id: number, menu_name: string) {
    this._id = _id;
    this.menu_name = menu_name;
  }
}
