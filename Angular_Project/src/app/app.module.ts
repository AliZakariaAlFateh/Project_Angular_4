import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD:Angular_Project_Day4/src/app/app.module.ts
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { FormValidationComponent } from './Components/Lab4PassDataFromChildToChild/form-validation/form-validation.component';
import { DisplayProductAfterInsertedComponent } from './Components/Lab4PassDataFromChildToChild/display-product-after-inserted/display-product-after-inserted.component';
=======
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/Core/home/home.component';
import { StudentComponent } from './Components/Core/student/student.component';
import { ContactComponent } from './Components/Core/contact/contact.component';
import { NotFoundComponent } from './Components/Core/not-found/not-found.component';
import { StudentDetailsComponent } from './Components/Core/student-details/student-details.component';
import { StudentFormComponent } from './Components/Core/student-form/student-form.component';
>>>>>>> e5ff20f92e6072a5401ea19cc28303343c973ed5:Angular_Project/src/app/app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SideBarComponent,
<<<<<<< HEAD:Angular_Project_Day4/src/app/app.module.ts
    FormValidationComponent,
    DisplayProductAfterInsertedComponent
=======
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    StudentDetailsComponent,
    StudentFormComponent,
    StudentComponent
>>>>>>> e5ff20f92e6072a5401ea19cc28303343c973ed5:Angular_Project/src/app/app.module.ts
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
