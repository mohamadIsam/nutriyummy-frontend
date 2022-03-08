import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ComplaintComponent } from "./complaint.component";
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    { path: '', component: ComplaintComponent }
];

@NgModule({
    declarations: [ComplaintComponent, StatusComponent],
    imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule]
})
export class ComplaintModule { }