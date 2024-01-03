import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  todoarray: any[] = [];
  tempdata: string = "";
  editdata: string = "";


  constructor(private api: ServiceService) {
    this.gettodoFunction();
  }

  addtodoFunction(data: string) {
    // this.todoarray.push(data)
    // console.log(data)
    // console.log(Object.values(data));
    let val =Object.values(data); // this is get value from thi data or objet and assign in to val[variable]
    
    
    
    if (val[0]=='') {  // in thi condition is cheack how many value in this variable
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    else {
      this.api.adddataservice(data).subscribe((res) => {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        this.gettodoFunction();
        // this.tempdata = " ";
      })
    }
  }

  gettodoFunction() {
    this.api.getdataservice().subscribe((res: any) => {
      this.todoarray = res;
    })
  }

  deteletodoFunction(todoid: number) {
    this.api.deletetodoservice(todoid).subscribe(() => {
      Swal.fire({
        title: "Good job!",
        text: "Your Delete Todo Is Success Full",
        icon: "success"
      });
      this.gettodoFunction();
    })
  }

  tmpdata:any='';  //  store todo data 
  static updateid=0; //  store data id and is static because can access any other function or methos using appcommponent
  edittofoFunction(id:any){ // this functiobn
    this.api.updategetdata(id).subscribe((result)=>{
      this.tmpdata=result; //  is return json data 
      AppComponent.updateid = id
      console.log(result)
    })
  }

  updatedataform(data:any){ 
    this.api.edittodoservice(AppComponent.updateid,data).subscribe((res)=>{
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      this.gettodoFunction();
      // this.tempdata = " ";
    })
  }


}
