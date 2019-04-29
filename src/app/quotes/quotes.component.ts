import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes('Fly, if you cant fly run, if you cant run walk,if you cant walk crawl .','James Kuria',
      ' Myles Munroe',new Date()),
    new Quotes('Get busy living or get busy dying.Life is not a test till you start failing','Maxwel Kaina',' Mark claine',
        new Date()),
    new Quotes('The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
    'Austine Kipchilagat',' Stephen King',new Date()),
    new Quotes('Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
       'Christine Mulindi',' Mark Twaine',new Date()),
    new Quotes('When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
       'Bilha Wangare',' Audre leon', new Date()),

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

    addNewQuotes(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.postDate = new Date(quote.postDate)
        this.quotes.push(quote)
      }

    
  constructor() { }

  ngOnInit() {
  }


}
