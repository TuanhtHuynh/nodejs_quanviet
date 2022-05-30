import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesIndexComponent } from './admin/categories/categories_index.component';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './admin/products/index/index.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AddCategoriesComponent } from './admin/categories/add-categories/add-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { AddThousandDotPipe } from './pipes/add-thousand-dot.pipe';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { AlertmessageComponent } from './alertmessage/alertmessage.component';
import { FileuploadComponent } from './admin/fileupload/fileupload.component';
import { EditorComponent } from './admin/editor/editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MegamenuComponent } from './home/megamenu/megamenu.component';
import { MenuindexComponent } from './admin/menu/menuindex/menuindex.component';
import { MenunewComponent } from './admin/menu/menunew/menunew.component';
import { MenuformComponent } from './admin/menu/menuform/menuform.component';
import { ModalComponent } from './admin/modal/modal.component';
import { SubmenuformComponent } from './admin/menu/submenuform/submenuform.component';
import { MegaContentFormComponent } from './admin/menu/mega-content-form/mega-content-form.component';
import { TableMegaSubComponent } from './admin/menu/table-mega-sub/table-mega-sub.component';
import { TableMegaHeaderComponent } from './admin/menu/table-mega-header/table-mega-header.component';
import { Submenu2formComponent } from './admin/menu/submenu2form/submenu2form.component';
import { ProductComponent } from './home/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    CategoriesIndexComponent,
    IndexComponent,
    SidebarComponent,
    AddCategoriesComponent,
    PaginationComponent,
    AddThousandDotPipe,
    AddProductComponent,
    AlertmessageComponent,
    FileuploadComponent,
    EditorComponent,
    MegamenuComponent,
    MenuindexComponent,
    MenunewComponent,
    MenuformComponent,
    ModalComponent,
    SubmenuformComponent,
    MegaContentFormComponent,
    TableMegaSubComponent,
    TableMegaHeaderComponent,
    Submenu2formComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
