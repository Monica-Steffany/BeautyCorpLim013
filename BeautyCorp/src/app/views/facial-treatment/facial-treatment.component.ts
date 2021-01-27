import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
declare const M: any;

@Component({
  selector: 'app-facial-treatment',
  templateUrl: './facial-treatment.component.html',
  styleUrls: ['./facial-treatment.component.scss']
})
export class FacialTreatmentComponent implements OnInit {

  productsPerfume:any=[];
  filterOpt:string;
  changeOpt(event){
    console.log(this.productsPerfume)
    if(this.filterOpt==='bestSeller'){
      this.productsPerfume.sort((a,b)=>{
        return a.salesUnits-b.salesUnits;
      }).reverse();
    }
    if(this.filterOpt==='promotion'){
      this.productsPerfume.sort((a,b)=>{
        return a.discount-b.discount;
      }).reverse();
    }
  }

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.firestoreService.getProducts('tratamiento facial').subscribe((catsSnapshot) => {
      this.productsPerfume = [];
      catsSnapshot.forEach((catData: any) => {
        this.productsPerfume.push({id: catData.payload.doc.id, ...catData.payload.doc.data()});
      })
    });
  }

}
