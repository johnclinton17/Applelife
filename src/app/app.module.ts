//import all dependency file for building app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2FabSpeedDialModule} from 'ng2-fab-speed-dial';
import { MzNavbarModule, MzSidenavModule, MzButtonModule, MzDropdownModule, MzCardModule, MzBadgeModule, MzCheckboxModule, MzTextareaModule  } from 'ngx-materialize';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OtpComponent } from './otp/otp.component';
import { ApiService } from './api/api.service';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { MzModalModule } from 'ngx-materialize';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SurrenderPolicyComponent } from './surrender-policy/surrender-policy.component';
import { NomineeComponent } from './nominee/nominee.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { AuthGuard } from './auth.guard';
import { AddnomineeComponent } from './addnominee/addnominee.component';
//create routing for all user pages
const Routes = [
  { path: 'login', component: OtpComponent },
   { path: '', component: OtpComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]  ,  data: {depth: 'home'} },
  { path: 'updateAccountInfo', component: UpdateAccountComponent ,   canActivate: [AuthGuard] , data: {depth: 'updateaccount'} },
  { path: 'updateProfile/:pageType', component: UpdateProfileComponent ,  canActivate: [AuthGuard] ,  data: {depth: 'profile'} },
  { path: 'feedback', component: FeedbackComponent ,  canActivate: [AuthGuard] ,  data: {depth: 'feedback'} },
  { path: 'nominee', component: NomineeComponent ,   canActivate: [AuthGuard] , data: {depth: 'nominee'} },
  { path: 'surrenderPolicy', component: SurrenderPolicyComponent ,  canActivate: [AuthGuard] ,  data: {depth: 'surrender'} },
  { path: 'addnominee', component: AddnomineeComponent ,   canActivate: [AuthGuard] , data: {depth: 'addnominee'} }
 ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OtpComponent,
    HomeComponent,
    UpdateAccountComponent,
    UpdateProfileComponent,
    FeedbackComponent,
    SurrenderPolicyComponent,
    NomineeComponent,
    AddnomineeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes, {scrollPositionRestoration: 'top'}), 
     HttpModule,
     HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2FabSpeedDialModule,
    MzNavbarModule,
    MzSidenavModule,
    MzButtonModule,
    MzTextareaModule,
    MzDropdownModule,
    MzCardModule,
    MzCheckboxModule ,
    MzModalModule,
    MzBadgeModule,
    FormsModule,
    SlickCarouselModule,
    AngularDraggableModule,
   LottieAnimationViewModule.forRoot(),
   ServiceWorkerModule.register('../ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
