import { useState } from "react";
import { genTicket} from "./helper";
import Ticket from "./Ticket";
import BuyButton from "./BuyButton";

//n->size of Ticket number 
//winningSum -> is the sum of digits of lucky Ticket.
export default function Lottery({ n=3, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <BuyButton action={buyTicket}/>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}