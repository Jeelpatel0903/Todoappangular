import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/todolist"
  

  adddataservice(data:any){
    return this.http.post(this.url,data);
  }
  getdataservice(){
    return this.http.get(this.url);
  }

  deletetodoservice(todoid : number){
    const deleteurl = `${this.url}/${todoid}`;
    return this.http.delete(deleteurl);
  }

  updategetdata(id:any){    // this api for get data update from this user 
    const updateurl = `${this.url}/${id}`;
    return this.http.get(updateurl);
  }

  edittodoservice(id:any,data:any){  //  this api for data update and chnage on the screen
    const updatedataurl = `${this.url}/${id}`;
    return this.http.put(updatedataurl,data);
  }
  
  

}
