import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesFormComponent } from './coaches-form/coaches-form.component';
import { CoachesListComponent } from './coaches-list/coaches-list.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SubscriptionsFormComponent } from './subscriptions-form/subscriptions-form.component';
import { SubscriptionsListComponent } from './subscriptions-list/subscriptions-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoachesSheetComponent } from './coaches-sheet/coaches-sheet.component';
import { CoachesPlanningComponent } from './coaches-planning/coaches-planning.component';
import { CustomersSheetComponent } from './customers-sheet/customers-sheet.component';

const routes: Routes = [
  {
    path:'coaches',
    pathMatch:'full',
    component:CoachesListComponent,
  },
  {
    path:'coaches-form',
    pathMatch:'full',
    component:CoachesFormComponent,
  },
  {
    path: 'coaches/:id/edit',
    pathMatch: 'full',
    component: CoachesFormComponent,
  },
  {
    path: 'coaches/:id/sheet',
    pathMatch: 'full',
    component: CoachesSheetComponent,
  },
  {
    path: 'coaches/:id/planning',
    pathMatch: 'full',
    component: CoachesPlanningComponent,
  },
  {
    path:'subscriptions',
    pathMatch:'full',
    component:SubscriptionsListComponent,
  },
  {
    path:'subscriptions-form',
    pathMatch:'full',
    component:SubscriptionsFormComponent,
  },
  {
    path: 'subscriptions/:id/edit',
    pathMatch: 'full',
    component: SubscriptionsFormComponent,
  },
  {
    path:'customers',
    pathMatch:'full',
    component:CustomersListComponent,
  },
  {
    path:'customers-form',
    pathMatch:'full',
    component:CustomersFormComponent,
  },
  {
    path: 'customers/:id/edit',
    pathMatch: 'full',
    component: CustomersFormComponent,
  },
  {
    path: 'customers/:id/sheet',
    pathMatch: 'full',
    component: CustomersSheetComponent,
  },
  {
    path:'',
    pathMatch:'full',
    component:DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
