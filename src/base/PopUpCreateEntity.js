import React from "react";
import "./popUp.css";
import useOutsideAlerter from "../hook/useOutsideAlerter";
import { useState } from "react/cjs/react.development";

function PopUpCreateEntity(props) {
  const { onChangeText, textInputEntity } = props;
  const popupRef = React.useRef(null);
  useOutsideAlerter(popupRef, props.onClickOutside);
  const [dataInput, setDataInput] = useState(textInputEntity || "");

  const [listData, setListData] = useState([
    {
      id: "1",
      name: "xin chao",
      desc: "yyrjrjvnxvsvnsdvj",
    },
    {
      id: "2",
      name: "hello ban",
      desc: "yyrjrjvnxvsvnsdvj",
    },
    {
      id: "3",
      name: "wil wiill",
      desc: "yyrjrjvnxvsvnsdvj",
    },
    {
      id: "4",
      name: "Jeujcdcsvsd",
      desc: "yyrjrjvnxvsvnsdvj",
    },
    {
      id: "5",
      name: "vduuuuuuu",
      desc: "yyrjrjvnxvsvnsdvj",
    },
    {
      id: "6",
      name: "whutjsapp",
      desc: "yyrjrjvnxvsvnsdvj",
    },
    {
      id: "7",
      name: "xin chao",
      desc: "yyrjrjvnxvsvnsdvj",
    },
    {
      id: "8",
      name: "mmuddoel",
      desc: "yyrjrjvnxvsvnsdvj",
    },
    {
      id: "9",
      name: "bolla bboaa",
      desc: "yyrjrjvnxvsvnsdvj",
    },
  ]);
  const [copyData] = useState(listData);
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
            value={dataInput}
            onChange={(e) => {
              setDataInput(e.target.value);
              onChangeText(e.target.value);
              let dataClone = [...copyData];
              let filterData = dataClone.filter((item) =>
                item.name.includes(e.target.value.trim())
              );
              setListData([...filterData]);
            }}
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
        {listData &&
          listData.map((item) => {
            return (
              <div key={item.id} className="suggestions_item">
                <div className="text1_suggestions_item">{item.name}</div>
                <div className="text2_suggestions_item">{item.desc}</div>
              </div>
            );
          })}
        {/* item
        <div className="suggestions_item">
          <div className="text1_suggestions_item">sdafasdfasd</div>
          <div className="text2_suggestions_item">
            dfsadfsdakfjsadkfjsdakjjaksd
          </div>
        </div>
        {/* item */}
      </div>
    </div>
  );
}

export default PopUpCreateEntity;
