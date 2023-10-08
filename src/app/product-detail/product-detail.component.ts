import { Component, OnInit } from '@angular/core';
import { product } from '../product.module';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonDataReaderService } from '../json-data-reader.service';
import { productcart } from '../productcart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  ProdObj = new product  ;
  productstocart :productcart[]=[];

  constructor(  private route:ActivatedRoute, private router:Router, private jsondatareader: JsonDataReaderService) { }

  ngOnInit(): void 
  {
    // localStorage.removeItem('productInfo');
    var id = this.route.snapshot.params['id'] || 0;
    
    this.jsondatareader.getallData().subscribe(
      x=> 
      {
          var abc = x?.find( y=> y._id == id )
          if(abc!=undefined)
            this.ProdObj  = abc;
        }
      
    );
    
  }
  toCart()
  { 
    var cartpro = new productcart;

    cartpro.productid = this.ProdObj._id;
    cartpro.authors = this.ProdObj.authors;
    cartpro.price= this.ProdObj.price;
    cartpro.thumbnailUrl = this.ProdObj.thumbnailUrl;
    cartpro.title = this.ProdObj.title;

    let x = localStorage.getItem('productInfo');

    if(x!=null && x!="[]" )
    {
      this.productstocart = JSON.parse(x || "[]") ;
      var filterProduct = this.productstocart.find(y=> y.productid == this.ProdObj._id )
      if(filterProduct!=undefined)
      {
        this.productstocart.forEach( z=> {
          if(z.productid == this.ProdObj._id)
            { 
              z.quantity+=1;
              z.totalprice= z.price * z.quantity;
            } 
            
        }  )
      }else
      {
        cartpro.totalprice=cartpro.price;
        this.productstocart.push(cartpro);
        cartpro.quantity =1;

      }

    }else
    {
      cartpro.totalprice=cartpro.price;
      this.productstocart.push(cartpro);
      cartpro.quantity =1;
    }
    
    localStorage.setItem('productInfo', JSON.stringify(this.productstocart));
    console.log(this.productstocart)
    
  }
  calldesc()
  {
  }
}
