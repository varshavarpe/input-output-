import { outputAst } from '@angular/compiler';
import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input()parentdata:any

  constructor() { }
  @Output() event =new EventEmitter<string>()

  ngOnInit(): void {
  }
  push(){

  }

}
