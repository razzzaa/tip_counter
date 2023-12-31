export default function Result({ bill, tip }) {
  return (
    <h3>
      You pay {(bill + tip).toFixed(2)} (bill: {bill} + tip: {tip})
    </h3>
  );
}
