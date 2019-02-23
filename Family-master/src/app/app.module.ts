import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
// FIREBASE INCLUTIONS
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { FetchProductsService } from './services/fetch-products.service';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase, 'Farmer'),
    AngularFirestoreModule,
  ],
  providers: [FetchProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
