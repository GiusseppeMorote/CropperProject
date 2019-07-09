import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestImageComponent } from './test-image.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularCropperjsModule } from "angular-cropperjs";

const routes: Routes = [
  { path: '', component: TestImageComponent }
];
@NgModule({
  declarations: [TestImageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AngularCropperjsModule
  ]
})
export class TestImageModule { }
