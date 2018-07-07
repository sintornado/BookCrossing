import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./components/contact/contact.component";
import { SearchComponent } from "./components/search/search.component";
import { LogInComponent } from "src/app/components/log-in/log-in.component";
import { RegistrationComponent } from "src/app/components/registration/registration.component";
import { AboutUsComponent } from "src/app/components/about-us/about-us.component";

const routes: Routes = [
    {path: '', component: SearchComponent},
    {path: 'log-in', component: LogInComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'dashboard',
        loadChildren: 'src/app/book/book.module#BookModule'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }