import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "src/app/book/dashboard/dashboard.component";
import { RequestComponent } from "src/app/book/request/request.component";
import { RequestedBooksComponent } from "src/app/book/requested-books/requested-books.component";
import { ShareComponent } from "src/app/book/share/share.component";
import { SharedBooksComponent } from "src/app/book/shared-books/shared-books.component";
import { ReturnComponent } from "src/app/book/return/return.component";
import { ReturnedBooksComponent } from "src/app/book/returned-books/returned-books.component";

const bookRoutes: Routes = [
    {path: '', component: DashboardComponent,
        children: [
            {path: 'request', component: RequestComponent },
            {path: 'requested-books', component: RequestedBooksComponent },
            {path: 'share', component: ShareComponent },
            {path: 'shared-books', component: SharedBooksComponent },
            {path: 'return', component: ReturnComponent },
            {path: 'returned-books', component: ReturnedBooksComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(bookRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BookRoutingModule { }