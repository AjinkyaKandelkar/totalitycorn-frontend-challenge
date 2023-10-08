import { Component, OnInit } from '@angular/core';
import { JsonDataReaderService } from '../json-data-reader.service';
import { product } from '../product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productlist : product[]=[];
  filterdproductlist : product[]=[];
  category : string []=[];
  pagination:number=1;
  cname!:string;
  constructor( private jsondatareader: JsonDataReaderService) {
    
    
  }
  ngOnInit(): void {
    this.jsondatareader.getallData().subscribe(
      x=> 
      {
          this.productlist = x
          x.forEach( y=> this.category.push( ...y.categories) ) 
          this.category = this.removeDuplicates(this.category);
          this.filterByCategory("");
        }
      
    );
  }
  filterByCategory( categoryName:string)
  {
    
    var temp = this.productlist.filter( x=> x.categories.includes(categoryName));
    if( categoryName == "")
    {
      this.cname="";
      this.filterdproductlist = this.productlist;
    }
    else
    {
      this.cname=categoryName;
      this.filterdproductlist = temp;
    }
  }

  removeDuplicates(myArray :string[]) {
    return myArray.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj).indexOf(obj) === pos;
    });
  }
}

