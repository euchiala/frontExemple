import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule} from "@angular/flex-layout";

import { FullCalendarModule } from '@fullcalendar/angular';

import { CoachesListComponent } from './coaches-list/coaches-list.component';
import { CoachesFormComponent } from './coaches-form/coaches-form.component';
import { SubscriptionsListComponent } from './subscriptions-list/subscriptions-list.component';
import { SubscriptionsFormComponent } from './subscriptions-form/subscriptions-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoachesSheetComponent } from './coaches-sheet/coaches-sheet.component';
import { CoachesPlanningComponent } from './coaches-planning/coaches-planning.component';
import { CustomersSheetComponent } from './customers-sheet/customers-sheet.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CoachesListComponent,
    CoachesFormComponent,
    SubscriptionsListComponent,
    SubscriptionsFormComponent,
    CustomersListComponent,
    CustomersFormComponent,
    DashboardComponent,
    CoachesSheetComponent,
    CoachesPlanningComponent,
    CustomersSheetComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
