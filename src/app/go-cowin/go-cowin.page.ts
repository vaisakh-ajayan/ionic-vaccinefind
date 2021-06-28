import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-go-cowin',
  templateUrl: './go-cowin.page.html',
  styleUrls: ['./go-cowin.page.scss'],
})
export class GoCowinPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss({
      'dismissed':true
    })
  }
}
