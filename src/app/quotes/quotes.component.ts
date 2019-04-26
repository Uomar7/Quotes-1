import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes('Fly, if you cant fly run, if you cant run walk,if you cant walk crawl .',
  'Author:Myles Munroe')
  ]

  deleteQuote(deleteit,index){
       if (deleteit){
           this.quotes.splice(index,1);
           }
           }

    toogleDetails(index){
      this.quotes[index].showInformation=!
      this.quotes[index].showInformation;
    }
  constructor() { }

  ngOnInit() {
  }

}
