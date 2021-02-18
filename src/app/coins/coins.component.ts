import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  arrCoins:any;
  search:any;
 
  
   api="https://api.coingecko.com/api/v3/coins"
  constructor(private coinsService :CoinsService ) { 
  
  }

  ngOnInit(): void {
    this.coinsService.get(this.api).subscribe(x =>  this.arrCoins = x);
   
  }
 

 

 
 
     
      
 
 
  
    
    
}
