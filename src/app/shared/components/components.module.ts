import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgCropperModule } from './img-cropper/img-cropper.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImgCropperModule
  ],
  exports:[
    ImgCropperModule
  ]
})
export class ComponentsModule { }
