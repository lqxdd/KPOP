import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular3';


  input: number = 0;
  nums: number[] = [];
  inputValue = '';


  change(event: any) {
    console.log(event.target.value);
    this.input = parseInt(event.target.value);
  }

  onSave() {
    this.nums = [...this.nums,this.input];
    this.input = 0;
  }


  text:string = ""
  changeText(event: any) {
    console.log(event.target.value);
    this.text = event.target.value;
  }


  n:number[]=[0,0,0]
  changeN(event: any,i:number) {
    console.log(event.target.value);
    this.n[i] = parseInt(event.target.value);
    this.n = [...this.n]
  }

}
