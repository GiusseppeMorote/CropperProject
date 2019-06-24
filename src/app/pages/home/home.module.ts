import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ImgCropperModule } from 'src/app/shared/components/img-cropper/img-cropper.module';
// import { ImageCropperModule } from 'ngx-image-cropper';

//Para mis rutas
const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    // ImageCropperModule
  ]
})
export class HomeModule { }
