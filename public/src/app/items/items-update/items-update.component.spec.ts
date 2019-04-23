import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsUpdateComponent } from './items-update.component';

describe('ItemsUpdateComponent', () => {
  let component: ItemsUpdateComponent;
  let fixture: ComponentFixture<ItemsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
