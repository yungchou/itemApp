import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../items.service'; // YC
import { ActivatedRoute, Params, Router } from '@angular/router'; // YC

@Component({
  selector: 'app-items-update',
  templateUrl: './items-update.component.html',
  styleUrls: ['./items-update.component.css']
})
export class ItemsUpdateComponent implements OnInit {

  constructor(
    private _itemsService: ItemsService
  ) { }

  ngOnInit() {
  }

}
