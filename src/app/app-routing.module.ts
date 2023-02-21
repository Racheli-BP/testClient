import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "answer", component: AnswerComponent },
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "**", redirectTo: "main" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
