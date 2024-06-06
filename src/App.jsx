import './App.css'
import BuyButton from './BuyButton';
import Lottery from './Lottery'
import { sum } from './helper';
function App() {

  //Below are the functions defining winning Condition and this will be passed as prop to Lottery.

  //If sum of the digits of the Ticket is 15 
  let winCondition=(ticket)=>{
    return sum(ticket)===15;    
  }

  //If all digits are same
  let winCondition2=(ticket)=>{
    return ticket.every((num)=> num===ticket[0]);    
  };

  //If first digit is equal to 0
  let winCondition3=(ticket)=>{
    return ticket[0]===0;   
  };

  return (
    <>
     <Lottery winCondition={winCondition}/>
    </>
  )
}
export default App;
