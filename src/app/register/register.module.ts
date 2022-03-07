import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";

const routes: Routes = [
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    declarations: [RegisterComponent],
    imports: [RouterModule.forChild(routes)]
})
export class RegisterModule {

}