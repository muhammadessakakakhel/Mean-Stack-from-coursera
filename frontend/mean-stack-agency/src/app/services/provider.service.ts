import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  // URL Endpoint to our Express app
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient ) { }

         // GET all records

         getProviders(): Observable<any>{
          return this.http.get(this.apiUrl);
         }


}
