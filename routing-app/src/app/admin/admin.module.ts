import { NgModule } from "@angular/core";
import { AdminComponent } from './admin.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            redirectTo: 'home',
            pathMatch:'full'
        },{
            path: 'home',
            component: AdminComponent
        }])
    ],
    declarations: [AdminComponent],
    providers: []
})
export class AdminModule{

}