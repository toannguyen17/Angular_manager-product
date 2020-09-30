import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators}   from '@angular/forms';
import {ProductService} from '../product.service';
import {Router}         from '@angular/router';
import {IProduct}       from '../iproduct';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {

	formGroup: FormGroup;

	constructor(
		private productService: ProductService,
		private formBuilder: FormBuilder,
		private router: Router
	) {
	}

	ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			name:        ['', [Validators.required]],
			description: ['', [Validators.required]]
		});
	}

	onCreate(): void {

		console.log('invalid: ' + this.formGroup.invalid);

		if (!this.formGroup.invalid) {
			let newProduct = {
				name:        this.formGroup.get('name').value,
				description: this.formGroup.get('description').value,
			} as IProduct;

			console.log(newProduct);

			this.productService.save(newProduct);

			this.router.navigate(['/']).then(r => {
				console.log(r);
			});
		}
	}
}
