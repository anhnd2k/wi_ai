import React from "react";
import "./popUp.css";
import useOutsideAlerter from "../hook/useOutsideAlerter";

function PopUpCreateEntity(props) {
  const popupRef = React.useRef(null);
  useOutsideAlerter(popupRef, props.onClickOutside);
  return (
    <div
      style={{
        width: props.width,
        minHeight: props.height ? props.height : "250px",
        top: props.top ? props.top : "",
        left: props.left ? props.left : "",
        right: props.right ? props.right : "",
        bottom: props.bottom ? props.bottom : "",
      }}
      className="pop_up_input"
      ref={popupRef}
    >
      <div className="create_entity">
        <div className="input_create">
          <input
            style={{
              width: "100%",
              fontSize: 15,
              paddingLeft: 10,
              border: "none",
              boxShadow: "none",
              borderWidth: 0,
              outlineWidth: 0,
            }}
            placeholder={`Entity for "${props.placeholderInput}"`}
          />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={props.onClickBtn}
          className="btn_create"
        >
          <div style={{ color: "#fff" }}>{props.btnText}</div>
        </div>
      </div>
      <div
        style={{
          height: props.heightSuggestions ? props.heightSuggestions : "250px",
        }}
        className="suggestions"
      >
        {/* item */}
        <div className="suggestions_item">
          <div className="text1_suggestions_item">sdafasdfasd</div>
          <div className="text2_suggestions_item">
            dfsadfsdakfjsadkfjsdakjjaksd
          </div>
        </div>
        {/* item */}
        <div className="suggestions_item">
          <div className="text1_suggestions_item">sdafasdfasd</div>
          <div className="text2_suggestions_item">
            dfsadfsdakfjsadkfjsdakjjaksd
          </div>
        </div>
        {/* item */}
        <div className="suggestions_item">
          <div className="text1_suggestions_item">sdafasdfasd</div>
          <div className="text2_suggestions_item">
            dfsadfsdakfjsadkfjsdakjjaksd
          </div>
        </div>
        {/* item */}
        <div className="suggestions_item">
          <div className="text1_suggestions_item">sdafasdfasd</div>
          <div className="text2_suggestions_item">
            dfsadfsdakfjsadkfjsdakjjaksd
          </div>
        </div>
        {/* item */}
        <div className="suggestions_item">
          <div className="text1_suggestions_item">sdafasdfasd</div>
          <div className="text2_suggestions_item">
            dfsadfsdakfjsadkfjsdakjjaksd
          </div>
        </div>
        {/* item */}
        <div className="suggestions_item">
          <div className="text1_suggestions_item">sdafasdfasd</div>
          <div className="text2_suggestions_item">
            dfsadfsdakfjsadkfjsdakjjaksd
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpCreateEntity;
