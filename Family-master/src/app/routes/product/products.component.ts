import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { FetchProductsService } from '../../services/fetch-products.service';
import { product } from '../../models/products';
import { NgForm } from '@angular/forms';
declare var settings: any;
@Component({
  selector: 'app-product',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
  modalRef: NgbModalRef;
  IsEdit: boolean;
  products: product[];
  product: product;

  newProduct: product = {
      Name: '',
      type: '',
      Price: null,
      quantity: null,
  };

  Id = 0;
  constructor(private modalService: NgbModal, private productService: FetchProductsService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {this.products = products; });
  }

  openPopup(template: TemplateRef<any>, product: product) {
    if (product != null) {
      this.IsEdit = true;
      this.product = product;
    }
    else {
      this.IsEdit = false;
    }
    this.modalRef = this.modalService.open(template, { size: 'lg' });
  }

  save($ev, form: NgForm) {

      if (this.IsEdit) {
          this.productService.updateProduct(this.product);
      } else {

        this.productService.addProduct(this.newProduct);

        this.newProduct = {
          Name: '',
          type: '',
          Price: null,
          quantity: null,
      };
      }
      this.closePopup();

  }

  remove( product: product) {
    this.productService.deleteProduct(product.id);
  }

  closePopup() {
    this.modalRef.close();
  }
}

