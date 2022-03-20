import { Orders } from './../Orders-model';
import { RestService } from './../../server-service/rest.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  columnsName = ['Nr. zamowienia','Data zamowienia','Data realizacji','Kontrahent','Wartość','Status'];
  index = ['order_id','order_date','order_ondate','contractor','ammountPaid','status'];

  orderList : Orders[] = [];
  contractorSearchName: any;
  date_start!: Date;
  key = 'id';
  reverse: boolean = false;

  constructor(private restApi: RestService) {}

  ngOnInit(): void {
    this.restApi.getOrders().subscribe
    (
      (response)=>
      {
        this.orderList = response;
      },
      (error)=>
      {
        console.log("Error load orders");
      }
    )
  }

  searchContractor(){
    if(this.contractorSearchName ==""){
      this.ngOnInit();
    }else{
      this.orderList = this.orderList.filter(res =>{
      return res.contractor.toLocaleLowerCase().match(this.contractorSearchName.toLocaleLowerCase());
    })
    }
  }

  searchStartDate(){

    this.orderList = this.orderList.filter(res=>{
      let temp = new Date(res.order_date)
      let start = new Date(this.date_start)
      return temp.getTime() >= start.getTime();
    })
  }


  sortBy(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }




}

