declare var google:any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 constructor(private router:Router){console.log("login works")}
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '585055992379-nn9dt9hera90703k5k5h8ccf2siqno88.apps.googleusercontent.com',
      callback:(res:any)=>{
        console.log(res);
        this.handleGoogleLogin(res.credential);
      }
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme: 'filled-blue',
      size: 'medium',
      shape: 'rectangle',
      width: 250
    })
  }
  private decoder(data:string){
    // const newData=JSON.stringify(data);
    return JSON.parse(atob(data.split(".")[1]));
  }
  handleGoogleLogin(res:any){
    if(res){
      const payload=this.decoder(res);
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
      this.router.navigate(['browse']);
    }
  }
}
