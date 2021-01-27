import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './mainViews/home/home.component';
import { EsikaComponent } from './mainViews/esika/esika.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemBrandComponent } from './components/item-brand/item-brand.component';
import { AboutAsComponent } from './views/about-as/about-as.component';
import { OurCatalogsComponent } from './views/our-catalogs/our-catalogs.component';
import { FooterEsikaComponent } from './Components/footer-esika/footer-esika.component';
import { NavbarEsikaComponent } from './components/navbar-esika/navbar-esika.component';
import { HomeEsikaComponent } from './views/home-esika/home-esika.component';
import { MakeupComponent } from './views/makeup/makeup.component';
import { PerfumeComponent } from './views/perfume/perfume.component';
import { PersonalCareComponent } from './views/personal-care/personal-care.component';
import { FacialTreatmentComponent } from './views/facial-treatment/facial-treatment.component';
import { BodyTreatmentComponent } from './views/body-treatment/body-treatment.component';
import { AccessoriesComponent } from './views/accessories/accessories.component';
import { EsikaPaymentsComponent } from './mainViews/esika-payments/esika-payments.component';
import { FooterPaymentsComponent } from './components/footer-payments/footer-payments.component';
import { NavbarPaymentsComponent } from './components/navbar-payments/navbar-payments.component';
import { ContentPaymentsComponent } from './components/content-payments/content-payments.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { CardProductComponent } from './components/card-product/card-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    EsikaComponent,
    FooterComponent,
    ItemBrandComponent,
    AboutAsComponent,
    OurCatalogsComponent,
    FooterEsikaComponent,
    NavbarEsikaComponent,
    HomeEsikaComponent,
    MakeupComponent,
    PerfumeComponent,
    PersonalCareComponent,
    FacialTreatmentComponent,
    BodyTreatmentComponent,
    AccessoriesComponent,
    EsikaPaymentsComponent,
    FooterPaymentsComponent,
    NavbarPaymentsComponent,
    ContentPaymentsComponent,
    ItemProductComponent,
    CardProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
