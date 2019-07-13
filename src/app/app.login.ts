import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'login',
    templateUrl:'app.login.html'
})
export class LoginComponent{
    username:string;
    password:string;

    constructor(private router:Router){}

    ValidateLogin(){
        console.log("hello")
        if(this.username=="admin" && this.password=="admin@123"){
            this.router.navigate(['show',this.username]);
        }
    }

}