import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { config } from './config';
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  api = config.API_URL;
url="http://localhost:3000/restaurants";
rootUrl="http://localhost:3000/";
  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  saveResto(data:any)
  {
    return this.http.post(this.url, data);
  }
  deleteResto(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  editCurrentResto(id:any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id:any,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  // registerUser(data:any)
  // {
  //   return this.http.post(this.rootUrl+"users", data)
  // }
}
