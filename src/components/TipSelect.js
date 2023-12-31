import { useState } from "react";
import TipModal from "./TipModal";

export default function TipSelect({
  percentage,
  onSelect,
  children,
  key,
  id,
  setTip,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(setTip);

  function OpenModal() {
    setIsModalOpen(true);
  }

  function CloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <label>{children} </label>
      <select
        className="selects"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>No tip - 0%</option>
        <option value={10}>Good - 10%</option>
        <option value={15}>Very Good - 15%</option>
        <option value={20}>Amazing - 20%</option>
        <option
          value={percentage}
          className="openModalButton"
          onClick={() => OpenModal()}
        >
          Other - {percentage}%
        </option>
      </select>
      {isModalOpen && (
        <TipModal
          percentage={percentage}
          id={id}
          CloseModal={CloseModal}
          setTip={setTip}
        />
      )}
    </div>
  );
}
