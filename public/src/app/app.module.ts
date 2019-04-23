import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsAllComponent } from './items/items-all/items-all.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { ItemsUpdateComponent } from './items/items-update/items-update.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';

import { HttpClientModule } from '@angular/common/http'; // yc
import { FormsModule  } from '@angular/forms'; // yc
import { ItemsService } from './items.service'; // yc

@NgModule({
  declarations: [
    AppComponent,
    ItemsAllComponent,
    ItemsEditComponent,
    ItemsUpdateComponent,
    ItemsNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // yc
    FormsModule  // yc
  ],
  providers: [ ItemsService ],  // yc
  bootstrap: [ AppComponent ]
})
export class AppModule { }
