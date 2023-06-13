import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProductCardComponent } from './reusable-components/product-card/product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestProdPageComponent } from './pages/test-prod-page/test-prod-page.component';
import { EarlyCocktailComponent } from './pages/early-cocktail/early-cocktail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ThatRedDressComponent } from './pages/that-red-dress/that-red-dress.component';
import { FestiveComponent } from './pages/festive/festive.component';
import { ClassyAffairComponent } from './pages/classy-affair/classy-affair.component';
import { HighTeaComponent } from './pages/high-tea/high-tea.component';
import { GirlsNightComponent } from './pages/girls-night/girls-night.component';
import { SixYardsComponent } from './pages/six-yards/six-yards.component';
import { HaldiMehndiComponent } from './pages/haldi-mehndi/haldi-mehndi.component';
import { GlamNightComponent } from './pages/glam-night/glam-night.component';
import { PeachBlissComponent } from './pages/peach-bliss/peach-bliss.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductCardComponent,
    TestProdPageComponent,
    EarlyCocktailComponent,
    ContactUsComponent,
    ProductDetailComponent,
    ThatRedDressComponent,
    FestiveComponent,
    ClassyAffairComponent,
    HighTeaComponent,
    GirlsNightComponent,
    SixYardsComponent,
    HaldiMehndiComponent,
    GlamNightComponent,
    PeachBlissComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
