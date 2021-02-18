import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
counter=0;
  constructor(private httpClient : HttpClient) { }
 
  get(api): Observable <any>{
  return this.httpClient.get(api)
}


}