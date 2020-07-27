const app = document.getElementById('app')
const temp = document.getElementById('temp');
const display = document.getElementById('display');


class Calculator extends React.Component {
  constructor(props){
    super(props);
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
          <button id="clear">Clear</button>
          <button id="zero">0</button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="decimal">.</button> 
          <button id="equals">=</button>
          <button id="add">+</button>
          <button id="subtract">-</button>
          <button id="multiply">*</button>
          <button id="divide">/</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Calculator/>, app);
