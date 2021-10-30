import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

    /* num1=0;
    num2=0;
   
     getResult(num1: number, num2: number) {
         let sum = num1 + num2;
        let diff = num1 - num2;
        let mult = num1 * num2; 
         return num1 + num2;  
        console.log(num1 + num2)
    }   */

    imgUrl: string ='';
    toggle = false;

    showImg(){
        this.toggle = !this.toggle;
        ///this.toggle = true;
    }

    ngOnInit(){}

  /*   getResult(): string{
        return "hey"
    } */

  
}