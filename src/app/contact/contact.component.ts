import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform:FormGroup;
  message:string
  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.contactform=new FormGroup({
      name:new FormControl(null,Validators.required),
      number:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      message:new FormControl(null,Validators.required)
    })
  }
  
  submit(data){
    this.http.post<{message:string}>('http://localhost:3000/form',data).subscribe(res=>{
      document.getElementById('response').style.display='flex'
      setTimeout(()=>{
        document.getElementById('response').style.opacity='0';
      },5000)
      if(res.message){
        document.getElementById('response').classList.add('success')
        this.message=res.message
      }else{
        document.getElementById('response').classList.add('err')
        this.message="Unexpected error!"
      }
    })
    this.contactform.reset()
  }

}
