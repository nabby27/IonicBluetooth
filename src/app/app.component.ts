import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  isConencted: Boolean = false;

  // make HelloIonicPage the root (or first) page
  rootPage:any = TabsPage;
  /*pages: Array<{title: string, component: any}>;*/

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public menu: MenuController) {

      /*this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Bluetooth', component: BluetoothPage },
        { title: 'Device', component: DevicePage }        
      ];*/
      
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    
    });
  }

  /*openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }*/
}
