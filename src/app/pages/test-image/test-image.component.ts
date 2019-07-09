import { Component, OnInit, ViewChild } from '@angular/core';
import { CropperComponent, ImageCropperResult } from 'angular-cropperjs';

@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.scss']
})
export class TestImageComponent implements OnInit {

  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  imgUrl = null;
  config = {
    // aspectRatio : 16/9,
    aspectRatio: NaN,
    dragMode: 'move',
    background: true,
    movable: true,
    rotatable: true,
    scalable: true,
    zoomable: true,
    viewMode: 3,
    checkImageOrigin: true,
    cropmove: this.cropMoved.bind(this),
    checkCrossOrigin: true
  };

  // imageUrl = "../../assets/images/boleta.png"
  // imageUrl = "";
  imageUrl: any;
  // indice1;
  indice1 = {
    height: 191.84615384615387,
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
    width: 337.73846153846165,
    x: 19.153846153846136,
    y: 160.61538461538464
  }

  resultResult: any;
  constructor() { }

  ngOnInit() {

  }
  setData() {
    this.angularCropper.cropper.setData(this.indice1);
  }

  cropMoved(data) {
    this.imgUrl = this.angularCropper.cropper.getCroppedCanvas().toDataURL();
  }
  getData() {
    this.angularCropper.cropper.getData()
    console.log("getdata:", this.angularCropper.cropper.getData());
  }
  //obtengo el evento del fileInput
  changeListener($event) {
    this.readThis($event.target);
  }
  //leo la imagen y le paso al componente
  readThis(inputValue: any) {
    let file: File = inputValue.files[0];
    let myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.imageUrl = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  getImageBase64(event: ImageCropperResult) {
    this.resultResult = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    console.log('resultResult:', this.resultResult)
  }
  exportCanvasBase64() {
    this.angularCropper.exportCanvas();
  }
}
