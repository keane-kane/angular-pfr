import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './materiels/materials.module';
import { httpInterceptorProviders } from './auth/helpers';
import { NgxPaginationModule } from 'ngx-pagination';

import { DragDropDirective } from './directive/drag-drop.directive';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { PromosComponent } from './entities/promos/promos.component';
import { ReferencielsComponent } from './entities/referenciels/referenciels.component';
import { CompetencesComponent } from './entities/competences/competences.component';
import { GrpTagsComponent } from './entities/grp-tags/grp-tags.component';
import { GrpCompetencesComponent } from './entities/grp-competences/grp-competences.component';
import { TagsComponent } from './entities/tags/tags.component';
import { CreatePromosComponent } from './entities/promos/create-promos/create-promos.component';
import { ListUserComponent } from './entities/users/list-user/list-user.component';
import { CreateUserComponent } from './entities/users/create-user/create-user.component';
import { ProfilSortieComponent } from './entities/profil-sortie/profil-sortie.component';
import { AdminNavBarComponent } from './dashboard/admin/admin-nav-bar/admin-nav-bar.component';
import { CreateReferencielComponent } from './entities/referenciels/create-referenciel/create-referenciel.component';
import { CreateGrpcompetencesComponent } from './entities/grp-competences/create-grpcompetences/create-grpcompetences.component';
import { CreateGrptagsComponent } from './entities/grp-tags/create-grptags/create-grptags.component';
import { CreateCompetencesComponent } from './entities/competences/create-competences/create-competences.component';
import { ProfilComponent } from './entities/profil/profil.component';
import { CreateProfilComponent } from './entities/profil/create-profil/create-profil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Base64encodePipe } from './pipe/base64encode.pipe';
import { ProfilDetailComponent } from './entities/profil/profil-detail/profil-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    PromosComponent,
    ReferencielsComponent,
    CompetencesComponent,
    GrpTagsComponent,
    GrpCompetencesComponent,
    TagsComponent,
    CreatePromosComponent,
    ListUserComponent,
    CreateUserComponent,
    ProfilSortieComponent,
    AdminNavBarComponent,
    CreateReferencielComponent,
    CreateGrpcompetencesComponent,
    CreateGrptagsComponent,
    CreateCompetencesComponent,
    ProfilComponent,
    CreateProfilComponent,
    DragDropDirective,
    PageNotFoundComponent,
    Base64encodePipe,
    ProfilDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
