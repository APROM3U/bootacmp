import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Stock from '../shared/modules/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://alexandre-bootcamp.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    //const url = 'https://alexandre-bootcamp.herokuapp.com/bootcamp/stock';
    return this.http.get<Stock[]>(` ${this.baseUrl}/stock`).toPromise();
  }

}
