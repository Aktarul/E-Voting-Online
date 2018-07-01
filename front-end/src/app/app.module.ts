import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FileUploadModule} from "ng2-file-upload";
import {VoterService} from "./services/voter.service";
import {PasswordValidationService} from "./services/password-validation.service";
import {CandidateService} from "./services/candidate.service";
import {AdminComponent} from "./components/admin/admin.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {InnerNavbarComponent} from "./components/inner-navbar/inner-navbar.component";
import {VoterListComponent} from "./components/voter-list/voter-list.component";
import {CandidateListComponent} from "./components/candidate-list/candidate-list.component";
import {CanvassingReportComponent} from "./components/canvassing-report/canvassing-report.component";
import {VotePageComponent} from "./components/vote-page/vote-page.component";
import {ValidateVoterComponent} from "./components/validate-voter/validate-voter.component";
import {VicePresidentComponent} from "./components/vice-president/vice-president.component";
import {GeneralSecretaryComponent} from "./components/general-secretary/general-secretary.component";
import {JointSecretaryComponent} from "./components/joint-secretary/joint-secretary.component";
import {TeasurerComponent} from "./components/teasurer/teasurer.component";
import {MemberComponent} from "./components/member/member.component";
import {AddCandidateComponent} from "./components/add-candidate/add-candidate.component";
import {AddVoterComponent} from "./components/add-voter/add-voter.component";
import {PhotoUploadComponent} from "./components/photo-upload/photo-upload.component";
import {PhotoUploadCandidateComponent} from "./components/photo-upload-candidate/photo-upload-candidate.component";
import {UpdateCandidateComponent} from "./components/update-candidate/update-candidate.component";
import {ViewCandidateComponent} from "./components/view-candidate/view-candidate.component";
import {AuthService} from "./services/auth.service";
import { ViewCandidate2Component } from './components/view-candidate2/view-candidate2.component';
import { ViewCandidate3Component } from './components/view-candidate3/view-candidate3.component';
import { Ng2CarouselamosModule} from "ng2-carouselamos";
import { AboutComponent } from './components/about/about.component';
import {VotePublishService} from "./services/vote-publish.service";
import { ResultComponent } from './components/result/result.component';
import {AdminService} from "./services/admin.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    NavbarComponent,
    InnerNavbarComponent,
    VoterListComponent,
    CandidateListComponent,
    CanvassingReportComponent,
    VotePageComponent,
    ValidateVoterComponent,
    VicePresidentComponent,
    GeneralSecretaryComponent,
    JointSecretaryComponent,
    TeasurerComponent,
    MemberComponent,
    AddCandidateComponent,
    AddVoterComponent,
    PhotoUploadComponent,
    PhotoUploadCandidateComponent,
    UpdateCandidateComponent,
    ViewCandidateComponent,
    ViewCandidate2Component,
    ViewCandidate3Component,
    AboutComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FileUploadModule,
    Ng2CarouselamosModule

  ],
  providers: [
    FormBuilder,
    VoterService,
    PasswordValidationService,
    CandidateService,
    AuthService,
    VotePublishService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
