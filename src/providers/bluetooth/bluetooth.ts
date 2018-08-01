import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BluetoothProvider {

  private firstStep: boolean = false;
  private secondStep: boolean = false;
  private thirdStep: boolean = false;
  private leftPhotos: number = 1;
  private timeFirstPhoto: number = 0;
  private durationPhoto: number = 1;
  private timeBetweenPhotos: number = 1;
  private howManyPhotos: number = 1;
  private isTakePhoto: boolean = false;

  data: Object = {
    "firstStep":this.firstStep,
    "secondStep":this.secondStep,
    "thirdStep":this.thirdStep,
    "leftPhotos":this.leftPhotos,
    "timeFirstPhoto":this.timeFirstPhoto,
    "durationPhoto":this.durationPhoto,
    "timeBetweenPhotos":this.timeBetweenPhotos,
    "howManyPhotos":this.howManyPhotos,
    "isTakePhoto":this.isTakePhoto
  };

  constructor() {


  }

  getFirstStep() {
    return this.firstStep;
  }

  setFirstStep(data) {
    this.firstStep = data;
  }

  getSecondStep() {
    return this.secondStep;
  }

  setSecondStep(data) {
    this.secondStep = data;
  }

  getThirdStep() {
    return this.thirdStep;
  }

  setThirdStep(data) {
    this.thirdStep = data;
  }

  getLeftPhotos() {
    return this.leftPhotos;
  }

  setLeftPhotos(data) {
    this.leftPhotos = data;
  }
  
  getIsTakePhoto() {
    return this.isTakePhoto;
  }

  setIsTakePhoto(data) {
    this.isTakePhoto = data;
  }

  getTimeFirstPhoto() {
    return this.timeFirstPhoto;
  }

  setTimeFirstPhoto(data) {
    this.timeFirstPhoto = data;
  }

  getDurationPhoto() {
    return this.durationPhoto;
  }

  setDurationPhoto(data) {
    this.durationPhoto = data;
  }

  getHowManyPhotos() {
    return this.timeBetweenPhotos;
  }

  setHowManyPhotos(data) {
    this.timeBetweenPhotos = data;
  }

  getTimeBetweenPhotos() {
    return this.howManyPhotos;
  }

  setTimeBetweenPhotos(data) {
    this.howManyPhotos = data;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

}
