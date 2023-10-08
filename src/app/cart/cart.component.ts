import { Component, OnInit } from '@angular/core';
import { product } from '../product.module';
import { productcart } from '../productcart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
   productstoCart: productcart[]=[];
   subtotal:number=0;

  ngOnInit(): void {

      let v = localStorage.getItem('productInfo');
      if(v!=null)
      {
        this.productstoCart = JSON.parse(v);
        
      }
      
  }
  incPro( id :number)
  {
    let q= this.productstoCart.find(x=> x.productid == id);
    if(q!=undefined)
    {
      q.quantity+=1;
      q.totalprice = q.price * q.quantity;
      this.subtotal=q.totalprice;
    }
       
    
  }
  decPro(id:number){
    let q= this.productstoCart.find(x=> x.productid == id);
    
    if(q!=undefined)
    {
      if(q.quantity<=0)
      {
        this.productstoCart.splice(q.productid,1)
      }
      else{
        q.quantity-=1;
        q.totalprice =  q.price / q.quantity;

        
      }
    }
  }

}
