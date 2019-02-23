import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmerorder',
  templateUrl: './farmerorder.component.html',
  styleUrls: ['./farmerorder.component.css']
})
export class FarmerorderComponent implements OnInit {

   
  constructor() { }

  
    Farmer=[{"name":"xyz","type":"abc","qty":5,"address":"pqr"},
    {"name":"abc","type":"abc","qty":5,"address":"pqr"},
    {"name":"zzz","type":"abc","qty":5,"address":"pqr"},
    {"name":"xyxy","type":"abc","qty":5,"address":"pqr"},
    {"name":"dd","type":"abc","qty":5,"address":"pqr"}
   ];
   remove(index)
 {
   
   this.Farmer.splice(index, 1);
 }
  ngOnInit() {
  }

}
