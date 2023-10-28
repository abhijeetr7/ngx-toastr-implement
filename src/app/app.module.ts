import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
			// positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton:true,
      timeOut:2000,
      maxOpened:2
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
