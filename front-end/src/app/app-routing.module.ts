import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {VoterListComponent} from "./components/voter-list/voter-list.component";
import {CandidateListComponent} from "./components/candidate-list/candidate-list.component";
import {CanvassingReportComponent} from "./components/canvassing-report/canvassing-report.component";
import {VotePageComponent} from "./components/vote-page/vote-page.component";
import {ValidateVoterComponent} from "./components/validate-voter/validate-voter.component";
import {VicePresidentComponent} from "./components/vice-president/vice-president.component";
import {GeneralSecretaryComponent} from "./components/general-secretary/general-secretary.component";
import {TeasurerComponent} from "./components/teasurer/teasurer.component";
import {MemberComponent} from "./components/member/member.component";
import {JointSecretaryComponent} from "./components/joint-secretary/joint-secretary.component";
import {AddCandidateComponent} from "./components/add-candidate/add-candidate.component";
import {AddVoterComponent} from "./components/add-voter/add-voter.component";
import {PhotoUploadComponent} from "./components/photo-upload/photo-upload.component";
import {PhotoUploadCandidateComponent} from "./components/photo-upload-candidate/photo-upload-candidate.component";
import {UpdateCandidateComponent} from "./components/update-candidate/update-candidate.component";
import {ViewCandidateComponent} from "./components/view-candidate/view-candidate.component";
import {ViewCandidate2Component} from "./components/view-candidate2/view-candidate2.component";
import {ViewCandidate3Component} from "./components/view-candidate3/view-candidate3.component";
import {AboutComponent} from "./components/about/about.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'voter-list', component: VoterListComponent },
  {path: 'candidate-list', component: CandidateListComponent},
  {path: 'canvassing-report', component: CanvassingReportComponent},
  {path: 'vote-page', component: VotePageComponent},
  {path: 'validate-voter', component: ValidateVoterComponent},
  {path: 'vice-president', component: VicePresidentComponent},
  {path: 'general-secretary', component: GeneralSecretaryComponent},
  {path: 'treasurer', component: TeasurerComponent},
  {path: 'member', component: MemberComponent},
  {path: 'joint-secretary', component: JointSecretaryComponent},
  {path: 'add-candidate', component: AddCandidateComponent},
  {path: 'add-voter', component: AddVoterComponent},
  {path: 'photo-upload/:id', component: PhotoUploadComponent},
  {path: 'photo-upload-candidate/:id', component: PhotoUploadCandidateComponent},
  {path: 'update-candidate/:id', component: UpdateCandidateComponent},
  {path: 'view-candidate/:id', component: ViewCandidateComponent},
  {path: 'view-candidate2/:id', component: ViewCandidate2Component},
  {path: 'view-candidate3/:id', component: ViewCandidate3Component},
  {path: 'canvassing-report', component: CanvassingReportComponent},
  {path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule {}
