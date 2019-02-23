import { Application } from './../../models/products';
import { FetchProductsService } from './../../services/fetch-products.service';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef, NgbPopover } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {
  modalRef: NgbModalRef;
  requirement: Application;
  requirements: Application[];
  IsEdit: boolean;
  Id = 0;

  newApplication: Application = {
    'id': '',
    'Name': '',
    'commodity': '',
    'quantity': null,
    'description': '',
    'date': new Date(),
    'accepted_id': null,
    'buyer_id': '',
    'buyer_type': '',
  };


  constructor(private modalService: NgbModal, private productService: FetchProductsService) {   }



  ngOnInit() {
    this.productService.getApplication().subscribe( requirements => {this.requirements = requirements; });
  }

  remove(requirement: Application) {
    this.productService.deleteApplication(requirement.id);
  }

  openPop(template: TemplateRef<any>, requirement: Application) {
    if (requirement != null) {
      this.IsEdit = true;
      this.requirement = requirement;
    } else {
      this.IsEdit = false;
    }
    this.modalRef = this.modalService.open(template, { size: 'lg' });
  }

  closePop() {
    this.modalRef.close();
  }

  save() {
    if (this.IsEdit) {
      // var pro = this.requirements.find(a => a.Id == Number(this.requirement.Id));
      // pro = this.requirement;
    } else {
      this.newApplication.date = new Date();
      this.productService.addApplication(this.newApplication);

      this.newApplication = {
        'id': '',
        'Name': '',
        'commodity': '',
        'quantity': null,
        'description': '',
        'date': new Date(),
        'accepted_id': null,
        'buyer_id': '',
        'buyer_type': '',
      };
    this.closePop();
  }

}
}
