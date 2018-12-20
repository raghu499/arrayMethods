import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { isArray } from 'util';
@Component({
  selector: 'app-array-examples',
  templateUrl: './array-examples.component.html',
  styleUrls: ['./array-examples.component.css']
})
export class ArrayExamplesComponent implements OnInit {
  cars = ["BMW", "Volvo", "rolls royce"];
  labs=["BMW lab"];
  emp  = [12, 5, 6, 530, 44, 250];
  books = [
    { 'id': 1, 'store_id': 1, 'name': 'Dichtertje' },
    { 'id': 2, 'store_id': 1, 'name': 'De uitvreter' },
    { 'id': 3, 'store_id': 2, 'name': 'Titaantjes' }
  ];
  result;
  constructor() {
    //indexOf example
    console.log("indexOf example", this.cars.indexOf("BMW") != -1);

    //lastIndexOf example
    console.log("Lastindexof Example: ", this.emp.lastIndexOf(250));
    
    //isArray example
    console.log("isArray example", isArray(this.emp));
    
    //concat example
    this.result=this.cars.concat(this.labs);
    console.log("concat Example : ",this.result );
    
    //filter example will create a new array with the new elements
    var passed = this.emp.filter(
      element => element >= 10
    )
    console.log("Testing filters : " + passed);
     
    //some will return true or false  if elements passes the test
    var test = this.emp.some(
      element => element >= 1000
    )
    console.log("Testing some method : " + test);
    
    //map example will create a new array with the result and
    // it will call every element in the provided array
    var root=this.emp.map(
      element => element - 10
    )
    console.log("Testing map example :" + root);
     
    // splice example will add or remove elements in the array
    var removed= this.emp.splice(2,0);
    console.log("Splice example :" + removed);

    //forEach example will call a function for each element in the array.
    this.emp.forEach(value =>
    console.log(value))

  
  }
  ngOnInit() {
  }
  

}
