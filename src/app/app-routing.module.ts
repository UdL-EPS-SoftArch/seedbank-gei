import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import {PropagatorDetailComponent} from "./propagator/propagator-detail/propagator-detail.component";
import {PropagatorDeleteComponent} from "./propagator/propagator-delete/propagator-delete.component";
import {PropagatorEditComponent} from "./propagator/propagator-edit/propagator-edit.component";
import { TakeListComponent } from './take/take-list/take-list.component';
import { CreateTakeComponent } from './take/create-take/create-take.component';
import {RequestDetailComponent} from "./request/request-detail/request-detail.component";
import { TakeDetailComponent } from './take/take-detail/take-detail.component';
import { TakeUpdateComponent } from './take/take-update/take-update.component';
import { TakeDeleteComponent } from './take/take-delete/take-delete.component';
import {RequestListComponent} from "./request/request-list/request-list.component";
import {TakeGuard} from "./take/take-basic/take.guard";
import {RequestDeleteComponent} from "./request/request-delete/request-delete.component";
import { RequestCreateComponent } from "./request/request-create/request-create.component";
import { RequestUpdateComponent } from "./request/request-update/request-update.component";
import { DonationDetailsComponent } from './donation/donation-details/donation-details.component';
import {DonationListComponent} from "./donation/donation-list/donation-list.component";
import {DonationDeleteComponent} from "./donation/donation-delete/donation-delete.component";
import {DonationCreateComponent} from "./donation/donation-create/donation-create.component";
import {DonationUpdateComponent} from "./donation/donation-update/donation-update.component";
import { SeedListComponent } from './seed/seed-list/seed-list.component';
import { SeedDetailComponent } from './seed/seed-detail/seed-detail.component';
import { SeedDeleteComponent } from './seed/seed-delete/seed-delete.component';
import { SeedCreateComponent } from './seed/seed-create/seed-create.component';
import { SeedUpdateComponent } from './seed/seed-update/seed-update.component';
import {DonationGuard} from "./donation/donation-guard/donation.guard";
import {RequestGuard} from "./request/request-guard/request.guard";

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'donations', component: DonationListComponent, canActivate: [LoggedInGuard, DonationGuard]},
  { path: 'donations/create', component: DonationCreateComponent, canActivate: [LoggedInGuard, DonationGuard]},
  { path: 'donations/:id/delete', component: DonationDeleteComponent, canActivate: [LoggedInGuard, DonationGuard]},
  { path: 'donations/:id/edit', component: DonationUpdateComponent, canActivate: [LoggedInGuard, DonationGuard]},
  { path: 'donations/:id', component: DonationDetailsComponent, canActivate: [LoggedInGuard, DonationGuard]},
  { path: 'donations', component: DonationListComponent, canActivate: [LoggedInGuard, DonationGuard]},
  { path: 'requests/create', component: RequestCreateComponent, canActivate: [LoggedInGuard, RequestGuard] },
  { path: 'requests/:id/delete', component: RequestDeleteComponent, canActivate: [LoggedInGuard, RequestGuard]},
  { path: 'requests/:id/edit', component: RequestUpdateComponent, canActivate: [LoggedInGuard, RequestGuard] },
  { path: 'requests/:id', component: RequestDetailComponent, canActivate: [LoggedInGuard, RequestGuard]},
  { path: 'requests', component: RequestListComponent, canActivate: [LoggedInGuard, RequestGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'propagator/:id', component: PropagatorDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'propagator/:id/delete', component: PropagatorDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'propagator/:id/edit', component: PropagatorEditComponent, canActivate: [LoggedInGuard]},
  { path: 'take', component: TakeListComponent, canActivate: [LoggedInGuard, TakeGuard]},
  { path: 'take/add', component: CreateTakeComponent, canActivate: [LoggedInGuard, TakeGuard] },
  { path: 'take/:id/delete', component: TakeDeleteComponent, canActivate: [LoggedInGuard, TakeGuard]},
  { path: 'take/:id/edit', component: TakeUpdateComponent, canActivate: [LoggedInGuard, TakeGuard]},
  { path: 'take/:id', component: TakeDetailComponent, canActivate: [LoggedInGuard, TakeGuard]},
  { path: 'seeds', component: SeedListComponent, canActivate: [LoggedInGuard]},
  { path: 'seeds/create', component: SeedCreateComponent, canActivate: [LoggedInGuard]},
  { path: 'seeds/:id', component: SeedDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'seeds/:id/delete', component: SeedDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'seeds/:id/edit', component: SeedUpdateComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
