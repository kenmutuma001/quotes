import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,"'' If you want to live a happy life tie it to a goal.Not people or things. ''","~Albert Einstein~",new Date(2019,2,27),"Kennan Two"),
   new Quote(2," '' Strength does not come from winning.Your struggles develop your strengths.When you go through hardships and decide not to surrender,that is strength. '' ","~Mahatma Gandhi~",new Date(2019,2,27),"Zoe Tunner"),
   new Quote(3," '' Never be afraid to raise your voice for honesty and truth and compassion against injustice and lying and greed.If people all over the world would do this,it would change the earth. '' ","~William Faulkner~",new Date(2019,2,27),"Jack The Ripper"),
   new Quote(4," '' If you can not do great things,do small things in a great way. '' ","~Napoleon Hill~",new Date(2019,2,27),"SWAT Mtoto Wa Eunice"),
   new Quote(5," '' I have not failed i have found 10,000 ways that wount work. '' ","~Thomas Edison~",new Date(2019,2,27),"Billy Joe"),
  ]

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }

   
        addNewQuote(quote){
          let quoteLength = this.quotes.length;
          quote.id=quoteLength+1;
          quote.completeDate = new Date(quote.completeDate)
          this.quotes.push(quote)
  
      }

  constructor() { }

  ngOnInit() {
  }

}
