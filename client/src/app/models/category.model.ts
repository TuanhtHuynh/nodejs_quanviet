export class Category {
  _id!: Number;
  name!: string;

  constructor(_id: number, name: string) {
    this._id = _id;
    this.name = name;
  }
}
