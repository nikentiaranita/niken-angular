import { FileUploaderComponent } from './../file-uploader/file-uploader.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductsComponent } from './products/products.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialDesign } from '../material/material';


const routes: Routes = [
  {
    path:'',
    component: HomeAdminComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {path:'products',
      component: ProductsComponent
      },
      {
        path:'',
        redirectTo:'/admin/dashboard',
        pathMatch:'full'
      }
    ]
  },
  
]


@NgModule({
  declarations: [
    DashboardComponent, 
    ProductsComponent,
    ProductDetailComponent,
    FileUploaderComponent,
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }