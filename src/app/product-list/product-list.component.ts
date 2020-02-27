import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { User } from '../model/user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  users: Array<User>;

  constructor(
    private data: DataService) {}

  ngOnInit(){
    this.data.getUsers().subscribe(data => {
      this.users = data.data;
    })
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(){
    window.alert('You will be notified when this item goes on sale');
  }

}


