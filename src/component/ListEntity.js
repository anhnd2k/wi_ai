import React, { useState } from "react";
import "./ListEntity.css";
import EntityItem from "./EntityItem";

function ListEntity({ data }) {
  return (
    <div className="box_show_data">
      <div className="title">
        <div className="item_title">Entity</div>
        <div className="item_title"> Role</div>
        <div className="item_title"> Resolved value</div>
        <div className="item_title"> Confidence</div>
      </div>
      {data &&
        data.map((item) => (
          <EntityItem name={item.valueSelect} entity={item.entity} />
        ))}
    </div>
  );
}

export default ListEntity;
