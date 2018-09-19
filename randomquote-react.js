$(document).ready(function() {
//https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML


  class RandomQuote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomIndex: 0,
        quoteArray : [{quote:"Walk as if you are kissing the Earth with your feet." , author:"Thich Nhat Hanh"},
                {quote:"Zen lives in the present. The Whole teaching is: how to be in the present; how to get out of the past which is no more and how not to get involved in the future which is not yet, and just to be rooted, centered, in that which is.", author:"- Osho, Zen: The Path of Paradox"},
                {quote:"Zen opens a man&#39;s eyes to the greatest mystery as it is daily and hourly performed; it enlarges the heart to embrace eternity of time and infinity of space in its every palpitation; it makes us live in the world as if walking in the garden of Eden", author:"D. T. Suzuki"},
                {quote:"Zen in it&#39;s essence is the art of seeing into the nature of one&#39;s being, and it points the way from bondage to freedom", author:"D.T.Suzuki"}]
      }
      this.newquote = this.newquote.bind(this);
      } //end constructor
    
    //define method
    newquote() {
      this.setState({
        randomIndex: Math.floor(Math.random() * 4)
      });  
      
    }//end method
    render() {
      
      /* const quote = quoteArray[this.state.randomIndex]
      const quote = quoteArray[0].quote; */
      //const quote = quoteArray[this.state.randomIndex]
      
      //const quote = this.state.quoteArray[this.state.randomIndex];
      //console.log("quote:"+quote);
      const index = this.state.randomIndex;
      //const index = 0;
      //console.log("index" +index);
      
      return (
      <div>
        <div><h3 id="text">{this.state.quoteArray.map(
         function(d, idx) {
      if(index===idx){
      return d.quote
              }
              })
              }</h3></div>
        <div id="author">{this.state.quoteArray.map(
         function(d, idx) {
      if(index===idx){
      return d.author
              }
              })
              }</div>
                  <div id="div-tweet">
<a id="tweet-quote" href='https://twitter.com/intent/tweet?&text="Walk as if you are kissing the Earth with your feet." Thich Nhat Hanh' target="_blank">Tweet Quote</a>
                  </div>
        <button id="new-quote" onClick={this.newquote} class="btn btn-primary">
        New Quote 
          </button><br />
          
      </div>
     ); //end return
    } // end render
    }; // end class
                  
   ReactDOM.render(<RandomQuote />, document.getElementById("quote-box"));
  //} 
  
 
  }); // document ready
