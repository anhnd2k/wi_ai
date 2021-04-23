import React, { useState } from "react";
import "./ListEntity.css";
import PopUpCreateEntity from "../base/PopUpCreateEntity";

function EntityItem({ name, entity }) {
  const [popUps, setPopUp] = useState(false);
  const [indexPopUpActive, setIndexPopUpActive] = useState(null);
  const [checkSame, setCheckSame] = useState(false);

  const onPopUp = (key) => {
    if (indexPopUpActive == key) {
      {
        !checkSame && setPopUp(true);
      }
      setCheckSame(false);
    } else {
      setIndexPopUpActive(key);
      setPopUp(true);
    }
  };

  const onClickOutside = () => {
    setPopUp(false);
    setCheckSame(true);
    setTimeout(() => {
      setCheckSame(false);
    }, 100);
  };

  return (
    <div className="item">
      <div className="best_item name_item">{entity}</div>
      <div className="best_item">
        <div onClick={() => onPopUp(1)} className="role">
          <div style={{ fontSize: "12px" }}>Role</div>
          <img
            style={{ width: 10, height: 10, marginRight: 15 }}
            src="https://image.flaticon.com/icons/png/128/25/25243.png"
          />
        </div>
        {popUps && indexPopUpActive == 1 && (
          <PopUpCreateEntity
            width={"185%"}
            height={"190px"}
            heightSuggestions={"190px"}
            left={"1px"}
            bottom={"-247px"}
            placeholderInput={"Entity for "}
            btnText={"Create Entity"}
            onClickOutside={onClickOutside}
          />
        )}
      </div>
      <div className="best_item ">
        <div
          style={{ marginLeft: "10px" }}
          onClick={() => onPopUp(2)}
          className="role"
        >
          <div style={{ fontSize: "12px" }}>{name}</div>
          <img
            style={{ width: 10, height: 10, marginRight: 15 }}
            src="https://image.flaticon.com/icons/png/128/25/25243.png"
          />
        </div>
        {popUps && indexPopUpActive == 2 && (
          <PopUpCreateEntity
            width={"185%"}
            height={"190px"}
            heightSuggestions={"190px"}
            left={"10px"}
            bottom={"-247px"}
            placeholderInput={"Entity for "}
            btnText={"Create Entity"}
            onClickOutside={onClickOutside}
          />
        )}
      </div>
      <div className="best_item">
        <div
          className="role2"
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <div>N/A</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20px",
          cursor: "pointer",
          color: "rgb(138, 132, 132)",
        }}
      >
        X
      </div>
    </div>
  );
}

export default EntityItem;
