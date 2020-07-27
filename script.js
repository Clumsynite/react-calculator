const app = document.getElementById('app')

const isOperator = /[x/+‑]/;
const negativeNum = /[x/+]-$/

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentVal: '0',
      previousVal: '0',
      tempVal: '',
      currentSymbol: '',
      calculated: false
    }
    this.writeNumber = this.writeNumber.bind(this);
    this.putDecimal = this.putDecimal.bind(this);
    this.operation = this.operation.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.maxLength = this.maxLength.bind(this)
  }
  maxLength = () => {
    this.setState({previousVal: this.state.currentVal, currentVal: 'Max Limit'})
    setTimeout(() => {
      this.setState({currentVal: this.state.previousVal})
    }, 800)
  }
  writeNumber = e => {
    if(!this.state.currentVal.includes('Max')){
      const value = e.target.value;
      this.setState({calculated: false})
      if(this.state.currentVal.length > 10){
        this.maxLength()
      }else if(this.state.calculated){
        this.setState({
          currentVal: value,
          tempVal: value!=='0'?value:''
        });
      }else {
        this.setState({
          currentVal: 
            this.state.currentVal ==='0' || isOperator.test(this.state.currentVal)
            ? value
            : this.state.currentVal + value,
          tempVal:
            this.state.currentVal === '0' && value === '0'
            ? this.state.tempVal === '' ? value : this.state.tempVal
            : /([^.0-9]0|^0)$/.test(this.state.tempVal)
              ? this.state.tempVal.slice(0, -1) + value
              : this.state.tempVal + value
        })
      }
    }
  }
  putDecimal = () => {
    if(this.state.calculated){
      this.setState({
        currentVal: '0.',
        tempVal: '0.',
        calculated: false
      });
    }else if(!this.state.currentVal.includes('.')&&!this.state.currentVal.includes('Limit')){
      this.setState({calculated: false})
      if(this.state.currentVal.length > 11){
        this.maxLength();
      }else if(/[x+/-]$/.test(this.state.tempVal) || (this.state.currentVal === '0' && this.state.tempVal === '')){
        this.setState({currentVal: '0.', tempVal: this.state.tempVal + '0.'})
      }else {
        this.setState({currentVal: this.state.tempVal[0] + '.', tempVal: this.state.tempVal + '.'})
      }
    }
  }
  operation = (e) => {
    if(!this.state.currentVal.includes('Max')){
      const value = e.target.value;
      this.setState({currentVal: value, calculated: false})
      if(this.state.calculated){
        this.setState({tempVal: this.state.previousVal + value})
      }else if(!/[+*/-]$/.test(this.state.tempVal)){
        this.setState({tempVal: this.state.tempVal + value, previousVal: this.state.tempVal})
      }else if(!negativeNum.test(this.state.tempVal)){
        this.setState({tempVal: (negativeNum.test(this.state.tempVal + value)? this.state.tempVal : this.state.previousVal) + value})
      }else if(value !== '-'){
        this.setState({tempVal: this.state.previousVal + value})
      }
    }
  }
  calculate = () => {
    if(!this.state.currentVal.includes('Max')){
      let calculation = this.state.tempVal;
      while(/[+*/-]$/.test(calculation)){
        calculation = calculation.slice(0, -1)
      }
      calculation = calculation.replace(/x/g, '*');
      let result = eval(calculation)
      this.setState({
        currentVal: result.toString(),
        tempVal: calculation.replace(/\*/g,'x') + '='+result,
        previousVal: result,
        calculated: true
      })
    }
  }
  clearScreen = () => {
    this.setState({
      currentVal: '0',
      previousVal: '0',
      tempVal: '',
      currentSymbol: '',
      calculated: false
    });
  }
  render(){
    return(
      <div id="calc-body">
          <Temp log = {this.state.tempVal.replace(/x/g, '*')} />
          <Display currentVal = {this.state.currentVal}/>
          <Buttons decimal={this.putDecimal} equals={this.calculate} number={this.writeNumber} operator={this.operation} clear={this.clearScreen}/>
      </div>
    )
  }
}

class Temp extends React.Component {
  render(){
    return <div id="temp">{this.props.log}</div>
  }
}

class Display extends React.Component {
  render(){
    return <div id="display">{this.props.currentVal}</div>
  }
}

class Buttons extends React.Component {
    render(){
    return(
      <div id="numpad">
        <button id="clear" value='C' onClick={this.props.clear}>Clear</button>
        <button id="zero" value='0' className="numeric" onClick={this.props.number}>0</button>
        <button id="one" value='1' className="numeric" onClick={this.props.number}>1</button>
        <button id="two" value='2' className="numeric" onClick={this.props.number}>2</button>
        <button id="three" value='3' className="numeric" onClick={this.props.number}>3</button>
        <button id="four" value='4' className="numeric" onClick={this.props.number}>4</button>
        <button id="five" value='5' className="numeric" onClick={this.props.number}>5</button>
        <button id="six" value='6' className="numeric" onClick={this.props.number}>6</button>
        <button id="seven" value='7' className="numeric" onClick={this.props.number}>7</button>
        <button id="eight" value='8' className="numeric" onClick={this.props.number}>8</button>
        <button id="nine" value='9' className="numeric" onClick={this.props.number}>9</button>
        <button id="decimal" value='.' className="numeric" onClick={this.props.decimal}>.</button> 
        <button id="equals" value='=' onClick={this.props.equals}>=</button>
        <button id="add" value='+' className="operator" onClick={this.props.operator}>+</button>
        <button id="subtract" value='-' className="operator" onClick={this.props.operator}>-</button>
        <button id="multiply" value='x' className="operator" onClick={this.props.operator}>x</button>
        <button id="divide" value='/' className="operator" onClick={this.props.operator}>/</button>
      </div>
    )
  }
}
ReactDOM.render(<Calculator/>, app);

const temp = document.getElementById('temp');
const display = document.getElementById('display');