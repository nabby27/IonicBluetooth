import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';

@Component({
  selector: 'page-parameters',
  templateUrl: 'parameters.html',
})
export class ParametersPage {

  isTakePhoto: Boolean = false;
  timeFirstPhoto: any = 0;
  durationPhoto: any = 1;
  timeBetweenPhotos: any = 1;
  howManyPhotos: any = 1;
  firstStep: Boolean = false;
  secondStep: Boolean = false;
  thirdStep: Boolean = false;
  leftPhotos: Number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bluetoothSerial: BluetoothSerial,
    public service: BluetoothProvider,
    public toastCtrl: ToastController,
    private ngZone: NgZone) {
      this.firstStep = this.service.getFirstStep();
      this.secondStep = this.service.getSecondStep();
      this.thirdStep = this.service.getThirdStep();
      this.leftPhotos = this.service.getLeftPhotos();
      this.isTakePhoto = this.service.getIsTakePhoto();
      this.timeFirstPhoto = this.service.getTimeFirstPhoto();
      this.durationPhoto = this.service.getDurationPhoto();
      this.timeBetweenPhotos = this.service.getTimeBetweenPhotos();
      this.howManyPhotos = this.service.getHowManyPhotos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametersPage');
  }

  showToast(msg, position, duration) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration,
      position: position,
    });
    toast.present(toast);
  }

  syncData() {
    this.service.setTimeFirstPhoto(this.timeFirstPhoto);
    this.service.setDurationPhoto(this.durationPhoto);
    this.service.setTimeBetweenPhotos(this.timeBetweenPhotos);
    this.service.setHowManyPhotos(this.howManyPhotos);
  }

  sendData() {
    this.service.setIsTakePhoto(true);
    debugger
    console.log(this.service.getData());
    this.readData();
  }

  readData() {
    this.bluetoothSerial.subscribe('-N')
      .subscribe((success) => {
          var size = success.length;
          success = success.substr(0, (size-2));
          console.log("data: " + success);
            if (success == 'a') {
              this.service.setFirstStep(true);
              this.service.setSecondStep(false);
              this.service.setThirdStep(false);
            } else if (success == 'b') {
              this.service.setFirstStep(false);
              this.service.setSecondStep(true);
              this.service.setThirdStep(false);
            } else if (success == 'c') {
              this.service.setFirstStep(false);
              this.service.setSecondStep(false);
              this.service.setThirdStep(true);
            } else {
              this.service.setLeftPhotos(success);
            }
          this.service.setIsTakePhoto(true);
        }
      )
  }

  isFinish() {
    this.service.setIsTakePhoto(false);
  }

  stop() {
    this.service.setIsTakePhoto(false);
    this.bluetoothSerial.write('x')
      .then(() => this.showToast("STOP", "middle", 200))
      .catch((error) => this.showToast("Error: " + error, "top", 2000))
  }

}
