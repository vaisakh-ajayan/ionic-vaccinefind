import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AboutPage } from './about/about.page';
import { FeaturesPage } from './features/features.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menu: MenuController,
    private modalController: ModalController
    ) {}
  language:string
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  options(){
    console.log(this.language)
  }

  async aboutModal(){
    const modal = await this.modalController.create({
      component: AboutPage,
      cssClass: 'my-custom-features-class',
      swipeToClose:true
    });
    return await modal.present()
  }

  async featuresModal(){
    const modal = await this.modalController.create({
      component: FeaturesPage,
      cssClass: 'my-custom-features-class',
      swipeToClose: true
    })
    return await modal.present()
  }
}
