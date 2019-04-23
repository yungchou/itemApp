import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // yc

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _items: HttpClient) { }

  getItems() {
    return this._items.get('/api/items');
  }
  getItemById(id) {
    return this._items.get(`/api/items/${id}`);
  }
  createItem(thisItem) {
      return this._items.post('/api/items/add', thisItem);
  }
  updateItem(id, thisItem) {
    return this._items.put(`/api/items/${id}`, thisItem);
  }
  deleteItem(id) {
    return this._items.delete(`/api/items/${id}`);
  }
}
