import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

	constructor(private productService: ProductService) {
	}

	ngOnInit() {
	}

	getAllProducts(): Array<IProduct> {
		return this.productService.getAllProducts();
	}

}
