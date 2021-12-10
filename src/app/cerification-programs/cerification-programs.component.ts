import { Component, OnInit } from '@angular/core';
import { Product } from '../models/model';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-cerification-programs',
  templateUrl: './cerification-programs.component.html',
  styleUrls: ['./cerification-programs.component.css']
})
export class CerificationProgramsComponent implements OnInit {

  products!: Product[];
	
	responsiveOptions;

	constructor(private productService: ProductService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    }
}
