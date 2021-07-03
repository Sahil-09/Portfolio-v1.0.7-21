import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    AOS.init()
    var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-container").style.top = "0";
    document.getElementById("nav-container").style.background = "#090909";
  } else {
    document.getElementById("nav-container").style.top = "-50px";
    document.getElementById("nav-container").style.background = "none";
  }
  prevScrollpos = currentScrollPos;
}
  }

  scrollabout(data){
    
    let about=document.getElementById(data);
    about.scrollIntoView({behavior:'smooth'})
  }

}
