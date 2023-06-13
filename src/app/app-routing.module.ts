import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarlyCocktailComponent } from './pages/early-cocktail/early-cocktail.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ThatRedDressComponent } from './pages/that-red-dress/that-red-dress.component';
import { FestiveComponent } from './pages/festive/festive.component';
import { ClassyAffairComponent } from './pages/classy-affair/classy-affair.component';
import { HighTeaComponent } from './pages/high-tea/high-tea.component';
import { GirlsNightComponent } from './pages/girls-night/girls-night.component';
import { SixYardsComponent } from './pages/six-yards/six-yards.component';
import { HaldiMehndiComponent } from './pages/haldi-mehndi/haldi-mehndi.component';
import { GlamNightComponent } from './pages/glam-night/glam-night.component';
import { PeachBlissComponent } from './pages/peach-bliss/peach-bliss.component';

const routes: Routes = [
  {path:'collection/EarlyCocktail' , component: EarlyCocktailComponent},
  {path:'collections/ThatRedDress' , component: ThatRedDressComponent},
  {path:'collection/Festive', component:FestiveComponent},
  {path:'collection/ClassyAffair', component:ClassyAffairComponent},
  {path:'collections/HighTea',component:HighTeaComponent},
  {path:'collections/GirlsNight',component:GirlsNightComponent},
  {path:'collection/SixYards', component:SixYardsComponent},
  {path:'collections/HaldiMehendi',component:HaldiMehndiComponent},
  {path:'collections/GlamNight',component:GlamNightComponent},
  {path:'collections/PeachBliss',component:PeachBlissComponent},
  {path:'home' , component:HomePageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailComponent },
  {path:'contactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
