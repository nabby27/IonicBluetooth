import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BluetoothPage } from '../bluetooth/bluetooth';
import { ParametersPage } from '../parameters/parameters';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  bluetoothRoot = BluetoothPage
  parametersRoot = ParametersPage
  device = {};
  constructor(public navCtrl: NavController) { }

}
