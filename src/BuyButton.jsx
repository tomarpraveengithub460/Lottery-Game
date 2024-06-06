export default function BuyButton({action}) {
    return (
        <button onClick={action} style={{ border: "2px solid blue", marginTop: "10px" }}>
            Buy New Ticket
        </button>
    )
}