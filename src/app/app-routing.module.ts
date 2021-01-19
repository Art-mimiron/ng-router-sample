import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MissingPageComponent } from './missing-page/missing-page.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';


const routes: Routes = [
  {path: 'crisis-list', component: CrisisListComponent},
  {path: '', redirectTo: 'heroes-list', pathMatch: 'full'},
  {path: '**', component: MissingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
