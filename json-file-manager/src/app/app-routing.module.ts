import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateJsonFileComponent } from './create-json-file/create-json-file.component';
import { UpdateJsonFileComponent } from './update-json-file/update-json-file.component';
import { ListJsonFilesComponent } from './list-json-files/list-json-files.component';

const routes: Routes = [
  { path: 'create', component: CreateJsonFileComponent },
  { path: 'update/:id', component: UpdateJsonFileComponent },
  { path: 'list', component: ListJsonFilesComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
