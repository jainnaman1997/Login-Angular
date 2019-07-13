import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './app.login';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './app.show';
import { RegisterComponent } from './app.register';

const routes:Routes=[
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'show/:id', component:ShowComponent},
    {path:'register', component:RegisterComponent}
];

@NgModule({
    imports: [
        BrowserModule, FormsModule, RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent, LoginComponent, ShowComponent, RegisterComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }