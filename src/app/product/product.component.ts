import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource: Observable<any>;
  products: Array<any> = [];

  constructor(private http: Http) {
    let myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    myHeaders.append('Access-Control-Allow-Methods', 'GET');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('authority', 'zy');
    // let options = new RequestOptions({headers: headers});
    this.dataSource = this.http.get('/products', {headers: myHeaders}).map((response) =>
      response.json()
  );
  }

// /api/products http://localhost:8000/api/products
  ngOnInit() {
    this.dataSource.subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

}
