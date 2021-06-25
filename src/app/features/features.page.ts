import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-features',
  templateUrl: './features.page.html',
  styleUrls: ['./features.page.scss'],
})
export class FeaturesPage implements OnInit {

  constructor(private modalController: ModalController) { }
  //The ion-slides were opening in an Ionic modal, which was
  // causing the slides to render before the page finished loading.
  //solved in ionViewDidEnter

  viewEntered = false;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.viewEntered = true;
}

  dismiss(){
    this.modalController.dismiss({
      'dismissed':true
    })
  }

}
