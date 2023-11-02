import { Component,Input } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/iproduct';
@Component({
  selector: 'app-display-product-after-inserted',
  templateUrl: './display-product-after-inserted.component.html',
  styleUrls: ['./display-product-after-inserted.component.css']
})
export class DisplayProductAfterInsertedComponent {
  @Input() RecieveDataFromChild2ByStudentParent:IProduct[]=[]

   NewObjProduct = {} as IProduct;
  
  Delete(num:number){
   
    this.RecieveDataFromChild2ByStudentParent.splice(num,1)
  }
}
