import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/hpages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

import { RotaperComponent } from './pages/rotaper/rotaper.component';




const routes: Routes = [{
  path : '',
  component: HomeComponent
},
{
  path: 'content/:id',
  component:ContentComponent
},
{path:'rotaper',
component:RotaperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
