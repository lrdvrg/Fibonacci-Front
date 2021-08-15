import { Component, OnInit } from '@angular/core';
import { FibonacciService } from './services/fibonacci.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  number: number;
  sendedNumber: number;
  canSubmit = false;
  results: any[];

  constructor(
    private fibonacciService: FibonacciService
  ) { }

  ngOnInit() {
  }

  generate(n: number) {
    this.fibonacciService.getFibonacci(n)
    .subscribe((res: any[])=>{
      console.log('RESPONSE', res);
      this.sendedNumber = n;
      this.results = res;
    });
  }

}
