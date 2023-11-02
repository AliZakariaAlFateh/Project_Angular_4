import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { isEmpty } from 'rxjs';
import { IProduct } from 'src/app/Interfaces/iproduct';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnChanges {

  @Output() productName:string="";
  @Output() productPrice:number=0;
   

   @Output()
   MyEventForAddProduct:EventEmitter<IProduct>=new EventEmitter<IProduct>()


   get isNameValid(){
    return this.productName !='' && this.productName.length>3
   }

   get isPricValid(){
    return this.productPrice !=0 && this.productPrice<55000 
   }

   ArrToList:IProduct[]=[]
  Add_Product_Data(){
    // if(this.isPricValid==true && this.isNameValid==true){
      var ObjProduct = {} as IProduct;
      ObjProduct.Product_Name=this.productName;
      ObjProduct.Product_Price=this.productPrice
      // this.ArrToList.push(ObjProduct)
     //   // console.log(this.productName,"-------",this.productPrice)
     //   // console.log(this.ArrToList)

    //   console.log("Send Data")
      this.MyEventForAddProduct.emit(ObjProduct)

    // }

   }

   ngOnChanges(changes: SimpleChanges): void {

    // if(this.isPricValid==true && this.isNameValid==true){
      // var ObjProduct = {} as IProduct;
      // ObjProduct.Product_Name=this.productName;
      // ObjProduct.Product_Price=this.productPrice
      // this.ArrToList.push(ObjProduct)
      // console.log(this.productName,"-------",this.productPrice)
      // console.log(this.ArrToList)
      // console.log(changes)
      // console.log("Send Data")
      // this.MyEventForAddProduct.emit(ObjProduct)

    // }
     
   }


   ///
   DataFromChildToParent:string="Data From Child To Parent By Emitter"

 
  //  SendData(e:any){
    
  //    console.log("Send Data")
  //    this.MyEventForAddProduct.emit(this.DataFromChildToParent)
  //  }
   
   /////Delete
  //  Delete(num:number){
   
  //   this.ArrToList.splice(num,1)
  // }

  
}
