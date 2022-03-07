import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComplaintComponent } from "./complaint.component";
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    { path: '', component: ComplaintComponent }
];

@NgModule({
    declarations: [ComplaintComponent, StatusComponent],
    imports: [RouterModule.forChild(routes)]
})
export class ComplaintModule { }