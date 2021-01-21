import { ProfilSortieComponent } from './entities/profil-sortie/profil-sortie.component';
import { CreatePromosComponent } from './entities/promos/create-promos/create-promos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './dashboard/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { ListUserComponent } from './entities/users/list-user/list-user.component';
import { CreateUserComponent } from './entities/users/create-user/create-user.component';
import { PromosComponent } from './entities/promos/promos.component';
import { ReferencielsComponent } from './entities/referenciels/referenciels.component';
import { GrpCompetencesComponent } from './entities/grp-competences/grp-competences.component';
import { CompetencesComponent } from './entities/competences/competences.component';
import { GrpTagsComponent } from './entities/grp-tags/grp-tags.component';
import { ProfilComponent } from './entities/profil/profil.component';
import { CreateProfilComponent } from './entities/profil/create-profil/create-profil.component';
import { CreateGrpcompetencesComponent } from './entities/grp-competences/create-grpcompetences/create-grpcompetences.component';
import { CreateCompetencesComponent } from './entities/competences/create-competences/create-competences.component';
import { CreateReferencielComponent } from './entities/referenciels/create-referenciel/create-referenciel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilDetailComponent } from './entities/profil/profil-detail/profil-detail.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [

        { path: 'admin-parms', component: PromosComponent},
        { path: 'create-promos', component: CreatePromosComponent},
        { path: 'profils-sorti', component: ProfilSortieComponent},
        { path: 'grp-compt', component: GrpCompetencesComponent},
        { path: 'create-grp-compt', component: CreateGrpcompetencesComponent},
        { path: 'comptence', component: CompetencesComponent},
        { path: 'create-comptence', component: CreateCompetencesComponent},
        { path: 'grp-tags', component: GrpTagsComponent},
        { path: 'referenciel', component: ReferencielsComponent},
        { path: 'create-referenciel', component: CreateReferencielComponent},



      { path: 'users', component: ListUserComponent,
       children: [
        { path: 'create-user', component: CreateUserComponent},

      ]
    },
    { path: 'profil', component: ProfilComponent,
      children: [
      { path: 'create-profil', component: CreateProfilComponent},
      { path: 'profil-detail/:id', component: ProfilDetailComponent}
        ]
    },
  ]
    },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
