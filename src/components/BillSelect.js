export default function BillSelect({ bill, setTheBill }) {
  return (
    <div>
      <label for="bill">How much was the bill? </label>
      <input
        className="selects"
        onChange={(e) => setTheBill(Number(e.target.value))}
        type="number"
        id="bill"
        value={bill}
      />
    </div>
  );
}
