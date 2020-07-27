const app = document.getElementById('app')
const temp = document.getElementById('temp');
const display = document.getElementById('display');

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div id="calc-body">
        <div id="screen">
          <div id="temp">
          </div>
          <div id="display">
            0
          </div>
        </div>
        <div id="numpad">
          <button id="clear" value='C'>Clear</button>
          <button id="zero" value='0'>0</button>
          <button id="one" value='1'>1</button>
          <button id="two" value='2'>2</button>
          <button id="three" value='3'>3</button>
          <button id="four" value='4'>4</button>
          <button id="five" value='5'>5</button>
          <button id="six" value='6'>6</button>
          <button id="seven" value='7'>7</button>
          <button id="eight" value='8'>8</button>
          <button id="nine" value='9'>9</button>
          <button id="decimal" value='.'>.</button> 
          <button id="equals" value='='>=</button>
          <button id="add" value='+'>+</button>
          <button id="subtract" value='-'>-</button>
          <button id="multiply" value='X'>X</button>
          <button id="divide" value='/'>/</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Calculator/>, app);
