import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgCropperService {
  onSettingsCropper: BehaviorSubject<any>= new BehaviorSubject<any>({});
  constructor() { }

  setCropper(item: any) {
    this.onSettingsCropper.next(item);
  }
}
