import { Component, OnChanges, OnInit } from '@angular/core';
import{map} from "rxjs/operators";
import { Store } from '@ngrx/store';
import * as NameActions from "./store/name.action";
import { Users } from './User.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit{
  Names:Observable<{names:string[]}>
  constructor(private store:Store<{NamereducerL:{names:string[]}}>) {
    
   }
  
  ngOnInit(){
    this.Names=this.store.select('NamereducerL');
    this.store.select('NamereducerL').subscribe(data=>{
      //  this.Names=data.names
        console.log(data)
      });
    // .pipe(map((rs)=>{
    //   console.log(rs)
    //   let datamod=[]
    //   for(const a of rs){
    //     datamod.push(a)
    //   }
    //   return datamod
    // })).subscribe(data=>{
    //   this.Names=data
    //   console.log(this.Names)
    // });
  }
  

  Change(){
    console.log(this.Names)
    let Change=["sahil","knows","NGRX"]
    this.store.dispatch(new NameActions.NameActions(Change))
    // this.store.select('Namereducer').pipe(map((rs)=>{
    //   console.log(rs.User)
    //   let datamod=[]
    //   for(const a of rs.User){
    //     datamod.push(a)
    //   }
    //   return datamod
    // })).subscribe(data=>{
    //   this.Names =data
    // });
  }

  Clear(){
    this.store.dispatch(new NameActions.ClearNameActions())
  //   this.store.select("Namereducer").subscribe(data=>{
  //     this.Names=data
  //   })
  // }
  }

}
