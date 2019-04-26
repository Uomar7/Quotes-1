import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes('Once bitten twice shy.')
  ]

  constructor() { }

  ngOnInit() {
  }

}
