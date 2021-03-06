import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from 'src/Basic/basic.component';
import { FormsModule } from '@angular/forms';
import { PythonComponent } from '../python/python.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { JavaComponent } from 'src/java/java.component';
import { ContactComponent } from 'src/contact/contact.component';
import { AboutComponent } from '../about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    PythonComponent,
    JavascriptComponent,
    NavbarComponent,
    JavaComponent,
    ContactComponent,
    AboutComponent
   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
