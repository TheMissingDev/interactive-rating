import { useState } from "react";
import "./App.css";
import star from "./interactive-rating-component-main/images/icon-star.svg";
import thankyou from "./interactive-rating-component-main/images/illustration-thank-you.svg";

function App() {
  const [isSelected, setIsSelected] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [ratSel, setRatSel] = useState([]);
  const [hideMain, setHideMain] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleClick = (e) => {
    for (let index = 1; index <= e.target.value; index++) {
      setRatSel(index);
      setIsSelected(index);
      setIsActive(true);
    }
  };
  const handleSubmit = () => {
    setHideMain(true);
    setShowThankYou(true);
  };
  return (
    <>
      <div className={`container ${hideMain ? "hide" : ""}`}>
        <div className="imgTex">
          <img src={star} alt="star.svg" />
          <h2>How did we do?</h2>
          <p className="info">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="footer">
          <button
            type="button"
            onClick={handleClick}
            className={`ratBtn ${
              isActive && isSelected >= 1 ? "isSelected" : ""
            }`}
            value={1}
            name="one"
            id="one"
          >
            1
          </button>
          <button
            type="button"
            onClick={handleClick}
            className={`ratBtn ${
              isActive && isSelected >= 2 ? "isSelected" : ""
            }`}
            value={2}
            name="two"
            id="two"
          >
            2
          </button>
          <button
            type="button"
            onClick={handleClick}
            className={`ratBtn ${
              isActive && isSelected >= 3 ? "isSelected" : ""
            }`}
            name="three"
            value={3}
            id="three"
          >
            3
          </button>
          <button
            type="button"
            onClick={handleClick}
            className={`ratBtn ${
              isActive && isSelected >= 4 ? "isSelected" : ""
            }`}
            name="four"
            value={4}
            id="four"
          >
            4
          </button>
          <button
            type="button"
            onClick={handleClick}
            className={`ratBtn ${
              isActive && isSelected >= 5 ? "isSelected" : ""
            }`}
            name="five"
            value={5}
            id="five"
          >
            5
          </button>
          <div className="submit">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isActive}
              className="btnSub"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className={`thankyou ${!showThankYou ? "hide" : ""}`}>
        <div className="img">
          <img src={thankyou} alt="illustration.svg" />
        </div>
        <div className="Sel">
          <p className="rating">You selected {ratSel} out of 5</p>
        </div>
        <div className="footer">
          <h2>Thank you!</h2>
          <p>
            {" "}
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
