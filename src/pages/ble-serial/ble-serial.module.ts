import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BleSerialPage } from './ble-serial';

@NgModule({
  declarations: [
    BleSerialPage,
  ],
  imports: [
    IonicPageModule.forChild(BleSerialPage),
  ],
  exports: [
    BleSerialPage
  ]
})
export class BleSerialPageModule {}
