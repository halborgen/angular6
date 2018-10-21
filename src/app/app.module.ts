import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';

const appRoutes: Routes = [
 // sets home page (base URL)
  { path: 'home', component: HomeComponent },
// redirects to home
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
	// redirects to contact
	{ path: '',   redirectTo: '/contact', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
	// redirects to gallary
	{ path: '',   redirectTo: '/gallary', pathMatch: 'full' },
  { path: 'gallary', component: GallaryComponent },
	
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
