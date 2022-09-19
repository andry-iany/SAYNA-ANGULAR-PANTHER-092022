import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmasComponent } from './pages/enigmas/enigmas.component';
import { HomeComponent } from './pages/home/home.component';
import { WakandaComponent } from './pages/wakanda/wakanda.component';

const routes: Routes = [
  {
    path: 'wakanda',
    component: WakandaComponent,
  },
  {
    path: 'enigmas',
    component: EnigmasComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
