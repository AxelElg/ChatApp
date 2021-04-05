import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app.routing';
import { navbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/Footer/footer.component';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    appRoutingModule,
    GraphQLModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    navbarComponent,
    FooterComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
