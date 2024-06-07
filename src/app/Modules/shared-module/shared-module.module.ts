import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { IconComponent } from './icon/icon.component';




@NgModule({
  declarations: [
    ToastComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastComponent,
    IconComponent
  ]
})
export class SharedModuleModule { }
