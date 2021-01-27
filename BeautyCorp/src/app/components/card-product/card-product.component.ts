import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() objProduct: any;
  promotionPrice:number;
  //modal
  @Input() childDataOrder: any;
  modalVisibility:boolean=false;
  orderDetailSelect:any;
  showModal(){
    this.modalVisibility=true;
  }
  closeModal(e){
    this.modalVisibility=false;
  }

  constructor() { }

  ngOnInit(): void {
    this.promotionPrice=this.objProduct.price*(100-this.objProduct.discount)/100;
  }

}
