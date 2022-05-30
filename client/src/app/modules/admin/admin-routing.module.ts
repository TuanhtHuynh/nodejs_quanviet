import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/admin/admin.component';
import { AddCategoriesComponent } from 'src/app/admin/categories/add-categories/add-categories.component';
import { CategoriesIndexComponent } from 'src/app/admin/categories/categories_index.component';
import { MegaContentFormComponent } from 'src/app/admin/menu/mega-content-form/mega-content-form.component';
import { MenuformComponent } from 'src/app/admin/menu/menuform/menuform.component';
import { MenuindexComponent } from 'src/app/admin/menu/menuindex/menuindex.component';
import { AddProductComponent } from 'src/app/admin/products/add-product/add-product.component';
import { IndexComponent } from 'src/app/admin/products/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'danhmuc',
        component: CategoriesIndexComponent,
      },
      { path: 'danhmuc/new', component: AddCategoriesComponent },
      {
        path: 'sanpham',
        component: IndexComponent,
      },
      {
        path: 'sanpham/new',
        component: AddProductComponent,
      },
      { path: 'sanpham/edit/:id', component: AddProductComponent },
      {
        path: 'menu',
        component: MenuindexComponent,
      },
      {
        path: 'menu/new',
        component: MenuformComponent,
      },
      { path: 'menu/edit/:id', component: MenuformComponent },
      {
        path: 'menu/mega-item/new',
        component: MegaContentFormComponent,
      },
      {
        path: 'menu/mega-content/edit/:id',
        component: MegaContentFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
