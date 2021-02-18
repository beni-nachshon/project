import { Component, OnInit, Input } from '@angular/core';
import { CoinsService } from '../coins.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-coine',
  templateUrl: './coine.component.html',
  styleUrls: ['./coine.component.css']
})
export class CoineComponent implements OnInit {
@Input () name:string;
@Input () usd:string;
@Input () id:string;
@Input () search:string;
inpoD:any;
inpoE:any;
inpoS:any;
image:any;

counter=0;
error:string;

  constructor(private coinsService : CoinsService) {
    
   }

  ngOnInit(): void {
    
  }
  get():void{
 
 
     
    this.coinsService.get(`https://api.coingecko.com/api/v3/coins/${this.id}`).subscribe(x =>
     { this.inpoD = x.market_data.current_price.usd,
      this.inpoE= x.market_data.current_price.eur,
      this.inpoS= x.market_data.current_price.ils
    
    
    });
}

switch(){
  if(this.counter % 2 == 0){
    this.coinsService. counter++;
    this. counter++;
  }
  else if ( this.counter % 2 !== 0)
  {
    this.coinsService.counter--;
    this.counter--;
  }
 this. check();

}
check(){
  if(this.coinsService.counter  > 5 )
 { this.error="לא ניתן לבחור יותר מחמש מטבעות"}
 else if(this.coinsService.counter  <= 5 )
 {
this.error="";
 }

 
}



}
