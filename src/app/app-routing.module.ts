import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { BasicComponent } from 'src/Basic/basic.component';
import { ContactComponent } from 'src/contact/contact.component';

import { JavaComponent } from 'src/java/java.component';

import { PythonComponent } from 'src/python/python.component';
import { JavascriptComponent } from 'src/javascript/javascript.component';

const routes: Routes = [
  {path:"",component:BasicComponent},
  {path:"Basic",component:BasicComponent},
  {path:"logical",component:JavaComponent},
  {path:"math",component: PythonComponent},
  {path:"number",component:JavascriptComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
