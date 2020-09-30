import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IProduct} from "../iproduct";

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {

	private id: number;

	private product: IProduct;

	form: FormGroup;

	constructor(private productService: ProductService,
	            private activatedRoute: ActivatedRoute,
	            private formBuilder:    FormBuilder,
	            private router:         Router) {
	}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			name: ['', [Validators.required]],
			description: ['', [Validators.required]],
		});

		this.activatedRoute.params.subscribe(params => {
			this.id = params.id;
			this.product = this.productService.findById(this.id);
			console.log(this.id);

			this.form.patchValue({
				name: this.product.name,
				description: this.product.description,
			})
		});
	}

	onUpdate() {
		if (!this.form.invalid) {
			this.product.name        = this.form.value.name;
			this.product.description = this.form.value.description;
			this.router.navigate(['/']);
		}
	}

}
