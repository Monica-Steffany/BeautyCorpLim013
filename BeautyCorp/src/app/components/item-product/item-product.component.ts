import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
products:any=[];
  @Input() visible:boolean;
  @Input() detailProduct:any;
  @Output() close:EventEmitter<boolean>= new EventEmitter;
  //Cerrar modal
  closeModal(){
    this.close.emit(false);
  }

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit(): void {
  }
  quantity: number = 1;
  priceS = 60;
  price=this.priceS;
  i = 1;
  plus() {
    if (this.i != 5) {
      this.i++;
      this.quantity = this.i;
      this.price = this.quantity * this.priceS;
    }
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
      this.price = this.quantity * this.priceS;
    }
  }
}