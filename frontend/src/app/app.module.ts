import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app.routing';
import { NavBarComponent } from './components/NavBar/NavBar.component';
import { FooterComponent } from './components/Footer/footer.component';
// import { HomeComponent, LoginComponent, RegisterComponent } from './pages';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    GraphQLModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
