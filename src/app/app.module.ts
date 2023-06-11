import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgxHateoasClientConfigurationService,
  NgxHateoasClientModule,
} from '@lagoshny/ngx-hateoas-client';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LoginBasicModule } from './login-basic/login-basic.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { AuthInterceptor } from './login-basic/auth-interceptor';
import { HttpErrorInterceptor } from './error-handler/http-error-interceptor';
import { AuthenticationBasicService } from './login-basic/authentication-basic.service';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { UserService } from './user/user.service';
import { PropagatorRegisterComponent } from './propagator/propagator-register/propagator-register.component';
import { PropagatorDeleteComponent } from './propagator/propagator-delete/propagator-delete.component';
import { PropagatorEditComponent } from './propagator/propagator-edit/propagator-edit.component';
import { PropagatorListComponent } from './propagator/propagator-list/propagator-list.component';
import { PropagatorDetailComponent } from './propagator/propagator-detail/propagator-detail.component';
import { PropagatorSearchComponent } from './propagator/propagator-search/propagator-search.component';
import { TakeComponentsModule } from './take/take-components.module';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDeleteComponent } from './request/request-delete/request-delete.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestUpdateComponent } from './request/request-update/request-update.component';
import { TakeListComponent } from './take/take-list/take-list.component';
import { TakeDetailComponent } from './take/take-detail/take-detail.component';
import { DonationDetailsComponent } from './donation/donation-details/donation-details.component';
import { DonationListComponent } from './donation/donation-list/donation-list.component';
import { DonationDeleteComponent } from './donation/donation-delete/donation-delete.component';
import { DonationCreateComponent } from './donation/donation-create/donation-create.component';
import { DonationUpdateComponent } from './donation/donation-update/donation-update.component';
import { SeedListComponent } from './seed/seed-list/seed-list.component';
import { SeedDetailComponent } from './seed/seed-detail/seed-detail.component';
import { SeedDeleteComponent } from './seed/seed-delete/seed-delete.component';
import { SeedCreateComponent } from './seed/seed-create/seed-create.component';
import { SeedUpdateComponent } from './seed/seed-update/seed-update.component';
import { SeedModalComponent } from './seed/seed-modal/seed-modal.component';
import { SeedSearchComponent } from './seed/seed-search/seed-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    NotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserSearchComponent,
    PropagatorRegisterComponent,
    PropagatorDeleteComponent,
    PropagatorEditComponent,
    PropagatorListComponent,
    PropagatorDetailComponent,
    PropagatorSearchComponent,
    UserSearchComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestListComponent,
    RequestDeleteComponent,
    RequestUpdateComponent,
    DonationDetailsComponent,
    DonationListComponent,
    DonationDeleteComponent,
    DonationCreateComponent,
    DonationUpdateComponent,
    SeedListComponent,
    SeedDetailComponent,
    SeedDeleteComponent,
    SeedCreateComponent,
    SeedUpdateComponent,
    SeedModalComponent,
    SeedSearchComponent,
  ],
  imports: [
    TakeComponentsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHateoasClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    AuthenticationBasicService,
    LoggedInGuard,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(hateoasConfig: NgxHateoasClientConfigurationService) {
    hateoasConfig.configure({
      http: {
        rootUrl: environment.API,
      },
    });
  }
}
