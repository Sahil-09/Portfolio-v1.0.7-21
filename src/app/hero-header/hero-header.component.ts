import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.css']
})
export class HeroHeaderComponent implements OnInit {

  @Output()
  emit = new EventEmitter()

  constructor() { }

  ngOnInit(){
  }

  work(){
    this.emit.emit(null)
  }

}
