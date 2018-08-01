import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController, Platform } from 'ionic-angular';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';


@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html',
})

export class BluetoothPage {

  unpairedDevices: any;
  //pairedDevices: any;
  gettingDevices: Boolean;
  isConnected: Boolean;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public navParams: NavParams,
    private bluetoothSerial: BluetoothSerial,
    public service: BluetoothProvider,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    this.bluetoothSerial.enable();
    //this.showPaired();
  }

  showToast(msg, position, duration) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration,
      position: position,
    });
    toast.present(toast);
  }

  startScanning() {
    this.showToast('Start scan', 'top', 200);
    //this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired()
      .then((success) => {
        this.unpairedDevices = success;
        this.gettingDevices = false;
      },
        (err) => {
          console.log(err);
        })
    //this.showPaired();
  }

  /*
  showPaired(){
    this.bluetoothSerial.list()
      .then((success) => {
        this.pairedDevices = success;
      },
      (err) => {
      })
  }
  */

  selectDevice(device: any) {
    this.showToast('Try connecting with ' + device.name, 'bottom', 200);

    let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(device.id)
              .subscribe(
                (success) => {
                  this.showToast('Connected ' + success, 'middle', 200);
                  this.isConnected = true;
                },
                (error) => {
                  this.showToast('Connected fail: ' + error, 'middle', 200);
                });
          }
        }
      ]
    });
    alert.present();
  }

  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect()
              .then((success) => {
                this.showToast('Disonnected correctly ' + success, 'middle', 200);
                this.isConnected = false;
              }),
              (error) => {
                this.showToast('Disonnected correctly ' + error, 'middle', 200);
              }
          }
        }
      ]
    });
    alert.present();
  }
}
