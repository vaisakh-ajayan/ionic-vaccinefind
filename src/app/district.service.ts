import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District } from './district.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  private districtDetail: District
  constructor(private http: HttpClient) { }

  fetchDistricts(state:number){
    return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+state)
    .pipe(
      map((responseData)=>{
        let districtArray:District[] = [];
        console.log("responsedata "+ responseData["districts"][0].district_name)
        responseData["districts"].forEach((item)=>{
          districtArray.push({"districtId":item.district_id,"districtName":item.district_name})
          console.log(item.district_id, item.district_name)
        })
        console.log("array returned by ser "+districtArray)
        return districtArray
      })
    )
  }

  updateDistrictDetail(district:District){
    this.districtDetail = {districtId:district.districtId, districtName: district.districtName}
    console.log("the center is"+this.districtDetail)
    return
  }

  getDistrictDetails(){
    if (this.districtDetail) {
      return this.districtDetail
    }
  }
}
