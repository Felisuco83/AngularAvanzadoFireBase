import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnoComponent } from './components/uno/uno.component'
import { DosComponent } from './components/dos/dos.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DosComponent },
  { path: 'changeStore', component: UnoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
