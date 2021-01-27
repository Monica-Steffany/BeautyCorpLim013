import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-esika',
  templateUrl: './navbar-esika.component.html',
  styleUrls: ['./navbar-esika.component.scss']
})
export class NavbarEsikaComponent implements OnInit {
  isScrollActive:boolean=false;
// activar scroll al bajar pantalla
  scroll(event){
    if(window.scrollY>50){
      this.isScrollActive=true;
    }else{
      this.isScrollActive=false;
    }
  }
  public products:any;
  constructor() { }
  ngOnInit(): void {
    this.products = [{name: "esauDesa",price:2000,type:"desa"},{name: "esau",price:2000,type:"nodesa"}];
  }
cart(){
  //alert("sora");
  
  if(document.querySelector("#shopping-cart.hidden")){
    document.querySelector("#shopping-cart").classList.remove("hidden");
  }else{
    document.querySelector("#shopping-cart").classList.add("hidden");
  }
}
exit(){
  console.log("hola");
  document.querySelector(".item-cart").classList.add("hidden");
}
}
