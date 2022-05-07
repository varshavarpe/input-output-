import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  data:any
  parantdata:any="";
  formdata:any;
  name:string="";
  email:string="";
  mobileno:string="";
  gender:string="";
  topic:string="";

  constructor() { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required])),
      email:new FormControl("",Validators.compose([Validators.required,Validators.email ])),
      mobileno:new FormControl("",Validators.compose([Validators.required])),
      gender:new FormControl(),
      topic:new FormControl()

    })
  }
  clickme(){
    this.data={name:this.name,email:this.email,mobileno:this.mobileno,gender:this.gender,topic:this.topic}
    console.log(this.data)
  }

}
