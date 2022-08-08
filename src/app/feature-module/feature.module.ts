import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeatureComponent } from "./feature.component";
import { FeatureChildComponent } from './feature-child/feature-child.component';
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared-module/shared.module";

const routes: Routes = [
  { path: 'featurechild', component: FeatureChildComponent }
]

@NgModule({
  declarations: [FeatureComponent, FeatureChildComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [FeatureComponent],
  bootstrap: [FeatureComponent]

})
export class featureModule { }
