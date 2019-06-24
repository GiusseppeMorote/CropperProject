import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { ImgCropperService } from './img-cropper.service';

@Component({
  selector: 'app-img-cropper',
  templateUrl: './img-cropper.component.html',
  styleUrls: ['./img-cropper.component.scss']
})
export class ImgCropperComponent implements OnInit {

  constructor(
    private _imgCropperService: ImgCropperService
  ) { }
  imageChangedEvent: any = '';
  @Input() show = false;
  @Input() resizeToWidth = 128;
  @Input() aspectRatio = 4/3;
  @Input() enableFile = true;

  @Input() imageBase64: any = '';
  @Output() image = new EventEmitter<any>();

  @Input() cropperPosition:any;
  @Output() eventCropper = new EventEmitter<any>();

  croppedImage: any = '';
  loaded = false;
  setPosition: CropperPosition = {};
  //obtengo el evento del
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  ngOnInit() {
    // console.log('show:', this.show);
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    // console.log("event:",event);

  }

  imageCropped(image: string) {
    this.croppedImage = image;
    // console.log("image:",image);
  }

  imageLoaded() {
    this.loaded = true;
  }

  loadImageFailed() {
    this.image.emit(false);
  }

  async createIndex() {
    let getCropper = await this.imageCropper.crop();
    if (getCropper) this.eventCropper.emit(getCropper);
  }

  cropperReady(){
    console.log('entre a cropperReady');
    // console.log('cropperPosition:',this.cropperPosition);
    this._imgCropperService.onSettingsCropper.subscribe((data)=>{
      // console.log('cropper service data:',data)
      if(data.position){
        // console.log('si esta lleno el objeto');
        this.setPosition = data.position;
      }      
    });

    // this.setPosition = this.cropperPosition;
    // if(this.cropperPosition){
      // this.cropperPosition = {
      //   x1: 340,
      //   x2: 594,
      //   y1: 17,
      //   y2: 117
      // }
    // }

  }
}

export interface CropperPosition {
  x1?:number,
  x2?:number,
  y1?:number,
  y2?:number,
}
