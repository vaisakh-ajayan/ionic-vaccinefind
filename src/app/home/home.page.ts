import { Component } from '@angular/core';
import { DistrictService } from '../district.service';
import { District } from '../district.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  array:District[]
  districtList= []
  selectedValue:number
  states=[
    {
      stateId: 1,
      stateName:'Andaman and Nicobar Islands'
    },
    {
      stateId: 2,
      stateName: 'Andhra Pradesh'
    },
    {
      stateId: 3,
      stateName: 'Arunachal Pradesh'
    },
    {
      stateId: 4,
      stateName: 'Assam'
    },
    {
      stateId: 5,
      stateName: 'Bihar'
    },
    {
      stateId: 6,
      stateName: 'Chandigarh'
    },
    {
      stateId: 7,
      stateName: 'Chhattisgarh'
    },
    {
      stateId: 8,
      stateName: 'Dadra and Nagar Haveli'
    },
    {
      stateId: 9,
      stateName: 'Delhi'
    },
    {
      stateId: 10,
      stateName: 'Goa'
    },
    {
      stateId: 11,
      stateName: 'Gujarat'
    },
    {
      stateId: 12,
      stateName: 'Haryana'
    },
    {
      stateId: 13,
      stateName: 'Himachal Pradesh'
    },
    {
      stateId: 14,
      stateName: 'Jammu and Kashmir'
    },
    {
      stateId: 15,
      stateName: 'Jharkhand'
    },
    {
      stateId: 16,
      stateName: 'Karnataka'
    },
    {
      stateId: 17,
      stateName: 'Kerala'
    },
    {
      stateId: 18,
      stateName: 'Ladakh'
    },
    {
      stateId: 19,
      stateName: 'Lakshadweep'
    },
    {
      stateId: 20,
      stateName: 'Madhya Pradesh'
    },
    {
      stateId: 21,
      stateName: 'Maharashtra'
    },
    {
      stateId: 22,
      stateName: 'Manipur'
    },
    {
      stateId: 23,
      stateName: 'Meghalaya'
    },
    {
      stateId: 24,
      stateName: 'Mizoram'
    },
    {
      stateId: 25,
      stateName: 'Nagaland'
    },
    {
      stateId: 26,
      stateName: 'Odisha'
    },
    {
      stateId: 27,
      stateName: 'Puducherry'
    },
    {
      stateId: 28,
      stateName: 'Punjab'
    },
    {
      stateId: 29,
      stateName: 'Rajasthan'
    },
    {
      stateId: 30,
      stateName: 'Sikkim'
    },
    {
      stateId: 31,
      stateName: 'Tamil Nadu'
    },
    {
      stateId: 32,
      stateName: 'Telangana'
    },
    {
      stateId: 33,
      stateName: 'Tripura'
    },
    {
      stateId: 34,
      stateName: 'Uttar Pradesh'
    },
    {
      stateId: 35,
      stateName: 'Uttarakhand'
    },
    {
      stateId: 36,
      stateName: 'West Bengal'
    },
  ]

  stateChange(){
    console.log(this.selectedValue)
    this.selectDistrict(this.selectedValue)
  }

  selectDistrict(id:number){
    this.districtService.fetchDistricts(id).subscribe((array)=>{
      this.districtList = [...array]
      console.log(this.districtList)
    })
  }

  updateDistrict(district:District){
    this.districtService.updateDistrictDetail(district)
    console.log("update ecter called")
  }

  constructor(private districtService: DistrictService) {}

}
