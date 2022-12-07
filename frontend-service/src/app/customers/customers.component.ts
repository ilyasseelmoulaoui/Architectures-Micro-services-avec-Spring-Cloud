import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers : any;
  err!:any;
  constructor(private  http:HttpClient , private  router : Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/CUSTOMER-SERVICE/customers').subscribe(
      { next:(data)=>{
          this.customers = data;
        },
        error : (err)=>{ console.log(err); }

      });
  }

  getBill(c: any) {
    this.router.navigateByUrl("/bill/"+c.id)

  }
}


// http://localhost:8888/BILLING-SERVICE/bills/1/productItems