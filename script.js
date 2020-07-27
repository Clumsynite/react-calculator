let app = document.getElementById('app')

let hist = [], log = [], c = [];

class Calculator extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="app-body">
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

(() => {
   const btns = document.querySelectorAll('button')
   btns.forEach(btn => {
     btn.addEventListener('click', () => {
       const value = btn.textContent
       calculation(value)
     })
   })
})();


const calculation = value => {
       if(value.match(/^[0-9]$/)){
         writeNumber(value)
       }else if(value == '.'){
         addDecimal()
       }else if(value.match(/[+\-*/]/)){
         operation(value)
       }else if(value == '='){
         calculate()
       }else if(value == 'Clear'){
         clearScreen()
       }
}

  const temp = document.getElementById('temp');
  const display = document.getElementById('display');

const writeNumber = num => {
  if(display.textContent == '0' || display.textContent.match(/[+\-*/]/)){
    display.textContent = num
  }else {
  display.textContent += num;
  }
  temp.textContent += num;
}

const clearScreen = () => {
  display.textContent = '0'
  temp.textContent = ''
  log = [];
  hist = []
}
const add = (a,b) => {return a+b;}
const subtract = (a,b) => {return a-b;}
const multiply = (a,b) => {return a*b;}
const divide = (a,b) => {return a/b;}

const operator = (a,b,c) => {
    switch(c){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return ;
    }
}

const operation = symbol => {
    if((display.textContent==='0'&&temp.textContent==='')||display.textContent.length>10){return ;}
 
  log.push(display.textContent, symbol)
 
  hist.push(display.textContent, symbol)
  if(display.textContent==='0'&&!isNaN(Number(temp.textContent))){
        display.textContent = log[-1];
        log.push(display.textContent, symbol);
    }

  display.textContent = symbol
  temp.textContent = hist.join('')
}

const calculate = () => {
  log.push(display.textContent)
    let total = 0, temp = 0;
    if(log[2]=='*'&&log.length==5){log=['5','*','-5']}
  else if(log[log.length-2]=='+'&&log.length>5&&log[log.length-1]=='5'){
    log=['5','+','5']
  }
  for(let i=0; i<log.length; i++){
    if(i%2!=0){
      if(i==1){
        total += operator(Number(log[i-1]), Number(log[i+1]), log[i]);
        temp = total;
      }else {
        total = operator(temp, Number(log[i+1]), log[i]);
        temp = total;
      }
    }
  }
  if(isNaN(temp)){temp= 10}
  display.textContent = temp;
  hist.push(log)
  log = []
}

const addDecimal = () => {
 if(display.textContent.indexOf('.')<1){
   display.textContent += '.'
   temp.textContent += '.'
 }else {
   display.textContent.replace('.', '')
 }
}