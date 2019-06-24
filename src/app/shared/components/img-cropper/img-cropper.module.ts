import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgCropperComponent } from './img-cropper.component';
import { ImageCropperModule } from "ngx-image-cropper";
@NgModule({
  declarations: [ImgCropperComponent],
  imports: [
    CommonModule,
    ImageCropperModule
  ], exports: [
    ImgCropperComponent,
    ImageCropperModule
  ]
})
export class ImgCropperModule { }
