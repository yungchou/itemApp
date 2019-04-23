import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../items.service'; // YC
import { ActivatedRoute, Params, Router } from '@angular/router'; // YC

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.css']
})
export class ItemsEditComponent implements OnInit {

  constructor(
    private _itemsService: ItemsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  editedItem: any;
  editErrors: any;
  id: any;

  ngOnInit() {
    this._route.params.subscribe( params => {
      this.id = params.id;
      this._itemsService.getItemById(this.id).subscribe( data => {
        this.editedItem = {
          _id: this.id,
          name: data['name'],
          description: data['description'],
          price: data['price'],
          image_url: data['image_url'],
          buy_url: data['buy_url']
        };
      });
    });
  }

  updateThisItem() {
    this._itemsService.updateItem(this.id, this.editedItem).subscribe( (data: any) => {
      if (data.errors) {
        console.log('*******', data.errors);
        this.editErrors = data.errors;
        // back to the same form
        this._router.navigate(['/', this.editedItem.id, 'edit']);
      } else {
        // Update was successful.
        // Clean up the form and redirect back to home page
        console.log(`\n*** Updated the item\n`, data);
        this.resetEditedItem();
        this._router.navigate(['']);
      }
    });
  }

  resetEditedItem() {
    this.editedItem = {
      _id: '',
      name: '',
      description: '',
      price: 0,
      image_url: '',
      buy_url: ''
    };
  }

}

