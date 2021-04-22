import React from 'react'
import '../App.css';
import '../access/css/style.css'

function Intents() {
    return (
         <div className="table_conten">
            <div className="header_tab">
                <div className="text_01">Intents</div>
                <div className="btn">
                    <div style={{ color: "#fff", fontWeight:"bold" }}>Intent</div>
                </div>
            </div>
            <div className="__search_input">
                <img style={{ width: 15, height: 15, marginLeft:10, marginRight:10}} src="https://www.flaticon.com/svg/vstatic/svg/1086/1086933.svg?token=exp=1619002563~hmac=516b9ca07f66a57d402b2efe9fe03a9c"/>
                <input
                    style={{outlineWidth: 0,width:"100%", border:0, height:"100%", fontSize: 16}}
                />
            </div>
            <div className="__table">
                <table>
                    <tr className="host">
                        <td>Name</td>
                        <td>Entities</td>
                        <td></td>
                    </tr>
                    <tr className="tr_hover">
                        <td className="col_name">Name</td>
                        <td className="clo_entitis">Entities</td>
                        <td className="select_dot"> Delete</td>
                    </tr>
                    <tr className="tr_hover">
                        <td className="col_name">Name</td>
                        <td className="clo_entitis">Entities</td>
                        <td className="select_dot">Delete</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Intents
