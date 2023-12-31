export default function TipModal({ CloseModal, id, isModalOpen, setTip }) {
  console.log(setTip);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              CloseModal();
              setTip(id, 0);
            }}
          >
            &#10060;
          </button>
        </div>
        <div className="title">
          <h2>What tip percentage do you prefer?</h2>
        </div>
        <div className="body">
          <input
            onChange={(e) => setTip(id, Number(e.target.value))}
            className="tipInpt"
            type="text"
          />
          <label className="tipPerc">%</label>
        </div>
        <div className="footer">
          <button onClick={() => CloseModal()}>Continue</button>
          <button
            id="cancelBtn"
            onClick={() => {
              CloseModal();
              setTip(id, 0);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
