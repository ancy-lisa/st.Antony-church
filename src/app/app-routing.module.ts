import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Certificate } from 'crypto';
import { FamilyNumberComponent } from './family-number/family-number.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  {path:'familyNumber',component:FamilyNumberComponent},
  {path:'certificate/:type',component:CertificatesComponent},
  {path:'certificateType',component:PopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
