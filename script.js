const app = document.getElementById('app')

const isOperatr = /[x/+-]/

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
          <button id="clear" value='C' >Clear</button>
          <button id="zero" value='0' className="numeric">0</button>
          <button id="one" value='1' className="numeric">1</button>
          <button id="two" value='2' className="numeric">2</button>
          <button id="three" value='3' className="numeric">3</button>
          <button id="four" value='4' className="numeric">4</button>
          <button id="five" value='5' className="numeric">5</button>
          <button id="six" value='6' className="numeric">6</button>
          <button id="seven" value='7' className="numeric">7</button>
          <button id="eight" value='8' className="numeric">8</button>
          <button id="nine" value='9' className="numeric">9</button>
          <button id="decimal" value='.' className="numeric">.</button> 
          <button id="equals" value='='>=</button>
          <button id="add" value='+' className="operator">+</button>
          <button id="subtract" value='-' className="operator">-</button>
          <button id="multiply" value='X' className="operator">X</button>
          <button id="divide" value='/' className="operator">/</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Calculator/>, app);

const temp = document.getElementById('temp');
const display = document.getElementById('display');