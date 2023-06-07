import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {


  title = 'Mean stack agency';
  nums=[10,20,30,50,90];
  sum =() =>{
    return this.nums[0]+ this.nums[1];
  }
  red = 'background-color:red';
  green = 'background-color:green';

  message = " ";
  clickMe = (val: any) =>{
    console.log(val);
    this.message = val;
  }

  show= true;
  toggle(){
    this.show = !this.show;
  }


  inc(){
    this.nums.push(Math.floor(Math.random()*100));
  }
  dec(){
    this.nums.pop();
  }
}
