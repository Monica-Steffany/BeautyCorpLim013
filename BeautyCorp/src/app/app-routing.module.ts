import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { EsikaPaymentsComponent } from './mainViews/esika-payments/esika-payments.component';
import { EsikaComponent } from './mainViews/esika/esika.component';
import { HomeComponent } from './mainViews/home/home.component';
import { AboutAsComponent } from './views/about-as/about-as.component';
import { AccessoriesComponent } from './views/accessories/accessories.component';
import { BodyTreatmentComponent } from './views/body-treatment/body-treatment.component';
import { FacialTreatmentComponent } from './views/facial-treatment/facial-treatment.component';
import { HomeEsikaComponent } from './views/home-esika/home-esika.component';
import { MakeupComponent } from './views/makeup/makeup.component';
import { OurCatalogsComponent } from './views/our-catalogs/our-catalogs.component';
import { PerfumeComponent } from './views/perfume/perfume.component';
import { PersonalCareComponent } from './views/personal-care/personal-care.component';

const routes: Routes = [
  {path:'', component: HomeComponent,
  children: [
    {path: '', component: AboutAsComponent},
    {path: 'ourCatalogs',component: OurCatalogsComponent}
  ]
  },
  {path:'esika', component:EsikaComponent,
  children: [
    {path: '', component: HomeEsikaComponent},
    {path: 'makeup', component: MakeupComponent},
    {path: 'perfume', component: PerfumeComponent},
    {path: 'personalCare', component: PersonalCareComponent},
    {path: 'bodyTreatment', component: BodyTreatmentComponent},
    {path: 'facialTreatment', component: FacialTreatmentComponent},
    {path: 'accessories', component: AccessoriesComponent},
  ]
},
{path:'payments', component:EsikaPaymentsComponent},
{path:'itemProduct', component:ItemProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
