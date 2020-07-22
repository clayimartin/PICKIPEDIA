import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'event-list', component: EventListComponent },
  { path: '*', redirectTo: '/' },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
