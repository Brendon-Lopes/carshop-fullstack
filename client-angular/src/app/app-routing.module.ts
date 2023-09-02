import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CarListComponent } from './features/car/car-list/car-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: CarListComponent,
  },
  {
    // TODO: Add component for registration
    path: 'register',
    component: CarListComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
