import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiListModule } from './material-ui-list/material-ui-list.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollTextComponent } from './scroll-text/scroll-text.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SlidesComponent } from './slides/slides.component';
import { FamilyNumberComponent } from './family-number/family-number.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';  //router 
import { FormsModule } from '@angular/forms';
import { MassTimingComponent } from './mass-timing/mass-timing.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

import {NgxPrintModule} from 'ngx-print';


import { CertificatesComponent } from './certificates/certificates.component';



const route :Routes =[
  {path:'',redirectTo:'/slides',pathMatch:'full'},
  {path:'slides', component:SlidesComponent},
  {path:'searchDetails' ,component:FormComponent},
  {path:'holyMassTiming',component:MassTimingComponent},
  {path:'newsAndEvents', component:NewsAndEventsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'testimonial',component:TestimonialComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScrollTextComponent,
    SidebarComponent,
    SlidesComponent,
    FamilyNumberComponent,
    FooterComponent,
    FormComponent,
    MassTimingComponent,
    NewsAndEventsComponent,
    GalleryComponent,
    TestimonialComponent,
    PopupComponent,
    CertificatesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiListModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route) // Setup your routes


    ,MatDialogModule,
    NgxPrintModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
