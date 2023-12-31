import { useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import ResetBtn from "./ResetBtn";
import Result from "./Result";
import TipSelect from "./TipSelect";
import BillSelect from "./BillSelect";

export default function Selects() {
  const [bill, setBill] = useState(0);
  const [friend, setFriend] = useState([]);

  const friendsSum = friend.reduce((acc, friend) => acc + friend.percentage, 0);

  const tip = Number((bill * (friendsSum / friend.length / 100)).toFixed(2));

  function setTheBill(e) {
    setBill(e);
  }

  function handleReset() {
    setBill("");
    setFriend([]);
    setFirst();
  }

  function setFriendPercentage(e, index) {
    setFriend([
      ...friend.slice(0, index),
      { ...friend[index], percentage: e },
      ...friend.slice(index + 1),
    ]);
  }

  function setFirst() {
    setFriend([{ id: Math.floor(Math.random() * 1000), percentage: 0 }]);
  }

  function setTip(id, percentage) {
    setFriend(
      friend.map((tip) =>
        tip.id === id
          ? {
              id: id,
              percentage: percentage,
            }
          : tip
      )
    );
  }

  useEffect(() => setFirst(), []);

  return (
    <div>
      <BillSelect bill={bill} setTheBill={setTheBill} />
      {friend.map((frnd, index) => (
        <>
          <TipSelect
            key={index}
            percentage={frnd.percentage}
            id={frnd.id}
            onSelect={(e) => setFriendPercentage(e, index)}
            setTip={setTip}
          >
            {index === 0
              ? "How did you like the service?"
              : "How did your friend like the service?"}
          </TipSelect>
        </>
      ))}
      <AddBtn setFriend={setFriend} friend={friend} />
      {bill > 0 && (
        <>
          <ResetBtn handleReset={handleReset} />
          <Result bill={bill} tip={tip} />
        </>
      )}
    </div>
  );
}
