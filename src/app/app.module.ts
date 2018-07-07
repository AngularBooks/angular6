import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';
import { ImageService } from './services/image.service';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {routes} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminImageListComponent } from './admin/admin-image-list/admin-image-list.component';
import { DashboardComponent } from './admin/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminImageCreateComponent } from './admin/admin-image-create/admin-image-create.component';
import { AdminImageEditComponent } from './admin/admin-image-edit/admin-image-edit.component';
import { AdminImageDeleteComponent } from './admin/admin-image-delete/admin-image-delete.component';
import { AdminUserCreateComponent } from './admin/admin-user-create/admin-user-create.component';
import {UserService} from './services/user.service';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LogoutComponent } from './logout/logout.component';
import { DropdownDirective } from './directives/dropdown.directive';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    AdminImageListComponent,
    DashboardComponent,
    AdminImageCreateComponent,
    AdminImageEditComponent,
    AdminImageDeleteComponent,
    AdminUserCreateComponent,
    AdminUserListComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    routes,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'angularbook.test'],
        blacklistedRoutes: ['localhost:4200/admin/']
      }
    })
  ],
  providers: [ImageService, UserService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
