import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ContactItemComponent } from './pages/contacts/contact-item/contact-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceCardComponent } from './pages/home/service-card/service-card.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { EnqiryFormComponent } from './enquiry-form/enquiry-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './common/login/login.component';
import { EnquiriesComponent } from './pages/enquiries/enquiries.component';
import { FilterservicePipe } from './pipes/filterservice.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { TeamSizePipe } from './pipes/team-size.pipe';
import { ProjectStatusPipe } from './pipes/project-status.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactsComponent,
    MenuBarComponent,
    ContactItemComponent,
    ServiceCardComponent,
    ProjectCardComponent,
    EnqiryFormComponent,
    LoginComponent,
    EnquiriesComponent,
    FilterservicePipe,
    HighlightPipe,
    TeamSizePipe,
    ProjectStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
