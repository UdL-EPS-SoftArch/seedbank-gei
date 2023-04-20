import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbCollapseModule, NgbDropdownModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxHateoasClientModule } from '@lagoshny/ngx-hateoas-client';
import { LoginBasicModule } from '../login-basic/login-basic.module';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';
import { TakeDetailComponent } from './take-detail/take-detail.component';
import { TakeListComponent } from './take-list/take-list.component';
import { CreateTakeComponent } from './create-take/create-take.component';
import { TakeUpdateComponent } from './take-update/take-update.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHateoasClientModule,
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule
    //CustomPipesModule,
    //CustomDirectivesModule,
    /* Other imports that will be used in the components */

  ],
  declarations: [
    TakeListComponent,
    TakeDetailComponent,
    CreateTakeComponent,
    TakeUpdateComponent
    /* Other component declaration*/
  ],
  exports: [
    TakeListComponent,
    TakeDetailComponent
    /* Other component exports*/
  ],
})
export class TakeComponentsModule {}