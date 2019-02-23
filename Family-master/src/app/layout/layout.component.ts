import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModalRef, NgbModal, NgbPopover } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

    modalRef: NgbModalRef;
    manufacturer: any;
    buyer: any;
    manufacturers: any = [];
    buyers: any = [];
    Id = 0;
    RegisterType;
    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
    }
    submit() {
        if (this.RegisterType === 1) {
            this.Id += 1;
            this.buyer.Id = this.Id;
            this.buyers.push(this.buyer);
            this.closePopup();
            alert('successful Register');

        } else {
            this.Id += 1;
            this.manufacturer.Id = this.Id;
            this.manufacturers.push(this.manufacturer);
            this.closePopup();
            alert('Unsuccessful Register');

        }
    }
    closePopup() {

        this.modalRef.close();
    }
    openPopup(template: TemplateRef<any>) {
        this.manufacturer = {};
        this.buyer = {};
        this.modalRef = this.modalService.open(template, { size: 'lg' });
    }
}
