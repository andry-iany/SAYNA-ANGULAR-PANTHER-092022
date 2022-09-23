import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmasComponent } from './pages/enigmas/enigmas.component';
import { HomeComponent } from './pages/home/home.component';
import { WakandaComponent } from './pages/wakanda/wakanda.component';

const routes: Routes = [
  {
    path: 'wakanda',
    component: WakandaComponent,
    title: 'Wakanda | Black Panther',
  },
  {
    path: 'enigmas',
    component: EnigmasComponent,
    title: 'Enigmes | Black Panther',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Home | Black Panther',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
