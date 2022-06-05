import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBusinessComponent } from './Pages/search-business/search-business.component';

const routes: Routes = [
    {
      path: "search-business",
      component: SearchBusinessComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
