import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetTelComponent } from './component/get-tel/get-tel.component';
import { CardTelComponent } from './component/card-tel/card-tel.component';
import { CardDetailsComponent } from './component/card-details/card-details.component';

@NgModule({
  declarations: [AppComponent, GetTelComponent, CardTelComponent, CardDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
