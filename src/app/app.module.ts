import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BluetoothPage } from '../pages/bluetooth/bluetooth';
import { ParametersPage } from '../pages/parameters/parameters';
import { TabsPage } from '../pages/tabs/tabs';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { BluetoothProvider } from '../providers/bluetooth/bluetooth';
//import { BLE } from '@ionic-native/ble';


@NgModule({
  declarations: [
    MyApp,
    BluetoothPage,
    ParametersPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BluetoothPage,
    ParametersPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    //BLE,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BluetoothProvider
  ]
})
export class AppModule { }
