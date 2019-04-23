import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// YC: customized routes start
import { ItemsAllComponent } from './items/items-all/items-all.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';
import { ItemsUpdateComponent } from './items/items-update/items-update.component';

const routes: Routes = [
  {path: 'new',       component: ItemsNewComponent  },
  {path: ':id/edit',  component: ItemsEditComponent },
  {path: ':id',       component: ItemsUpdateComponent },
  {path: '',          component: ItemsAllComponent,  pathMatch: 'full'},
  {path: '**',        redirectTo: '/'  }
];
// YC: customized routes end

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
