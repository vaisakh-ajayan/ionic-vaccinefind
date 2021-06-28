import { Component, Input, OnInit } from '@angular/core';
import { DistrictService } from 'src/app/district.service';
import { interval, Subscription } from 'rxjs'
import { ModalController } from '@ionic/angular';
import { FiltersPage } from 'src/app/filters/filters.page';
import { GoCowinPage } from 'src/app/go-cowin/go-cowin.page';

@Component({
  selector: 'app-centres-info',
  templateUrl: './centres-info.page.html',
  styleUrls: ['./centres-info.page.scss'],
})
export class CentresInfoPage implements OnInit {
  detail: {districtId: number; districtName: string}
  date: any
  newDemoDate: any
  disposable: Subscription
  start: number
  offset: number
  availableCapacity: number

  constructor(
    private districtService: DistrictService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.availableCapacity=1
    this.start=29
    this.date=new Date()
    this.detail = this.districtService.getDistrictDetails()
    if (this.detail) {
      console.log("inside dis page "+ this.detail.districtId, this.detail.districtName)

    }

  const latency = interval(1000)
  this.disposable = latency.subscribe(number =>{
    // if (this.date!==new Date()) {
    //   this.date = new Date()
    // }
    if (this.start<1) {
      this.start=29
    }
    else{
      this.start=this.start-1
    }
    console.log(number)
  })

  setInterval(()=>{
    this.newDemoDate = new Date().getMinutes()
    if (this.date.getMinutes()!==this.newDemoDate) {
      this.date=new Date()
    }
    }, 1000)

  }

  ngOnDestroy(){
    this.disposable.unsubscribe()
  }

  segmentChanged(event){
    console.log(event)
  }

  async filterModal(){
    const modal = await this.modalController.create({
      component: FiltersPage,
      cssClass: 'my-custom-filter-class',
      swipeToClose:true
    })
    return await modal.present()
  }

  async cowinModal(){
    const modal = await this.modalController.create({
      component: GoCowinPage,
      cssClass: 'my-custom-features-class',
      swipeToClose:true
    })
    return await modal.present()
  }

}
