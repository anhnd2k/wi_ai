import React, { useEffect, useState, useRef } from 'react'
import '../App.css';
import ListEntity from '../component/ListEntity';
import PopUpCreateEntity from '../base/PopUpCreateEntity'

function Home() {
    const [showPopup, setShowpopup] = useState(false);
    const [popupIntent, setPopupIntent] = useState(false);
    const [checkSame, setCheckSame] = useState(false)
    const [textInput, setTextInput] = useState("")
    const [entitySelect, setIntitySelect] = useState("")
    const typingInput = useRef(null)
    const [text, setText] = useState("<span>"+"sdsd"+"</span>")

    const handleMouseUp = () => {
        var res = window.getSelection().toString();
        {
        res ? setShowpopup(true) : setShowpopup(false);
        }
        setIntitySelect(res)
    };

    const onClickPopUpCreate = () => {
        setShowpopup(false)
    }
    const openPopup = () => {
        {!checkSame && setPopupIntent(true) }
        setCheckSame(false)
    };

    const onClickOutside = () => {
        setPopupIntent(false);
        setCheckSame(true)
        setTimeout(() => {
        setCheckSame(false)
        }, 100);
    }

    const onchangeTextInput = (text) => {
        const value = text.target.value
        if (typingInput.current) {
            clearTimeout(typingInput.current)
        }
        typingInput.current = setTimeout(() => {
            console.log(value)
            setTextInput(value)
        }, 500);
    }

    const onChange = () => {
        document.getElementById("editor").addEventListener("input", (event) => {
            var value = event.srcElement.outerText
            if (typingInput.current) {
                clearTimeout(typingInput.current)
            }
            typingInput.current = setTimeout(() => {
                setTextInput(value)
            }, 500);
        }, false);
    }
    
    const onClickBtn = () => {
        const dataDefau = textInput.split("")
        const dataSelect = entitySelect.split("")
        
        dataSelect.map((item) => {
            document.getElementById('editor').innerHTML += '<span style="background-color: red">' + item + '</span>'
        })
    }
    const onKeyDown = e => {
        e.preventDefault()
        const key = e.nativeEvent.key
        const inputRegex = /[a-zA-Z0-9]/
        console.log(e)
        if (inputRegex.test(key)) {
            setTextInput(textInput + key)
        }

        if (key == 'Backspace') {
            setTextInput(textInput.substr(0, textInput.length -1 ))
        }
        
    }

    return (
          <div className="table_conten">
            <div>
                <h2>Train Your App</h2>
                <div className="textDescribe">
                    Add a sample utterance and specify an intent. You can also
                    highlight words or phrases in the utterance to annotate.
                </div>
                <div onClick={() => console.log("cc")} className="noti">
                    See how it works{" "}
                </div>
                {/* input */}
                <div className="inputBox">
                    <img
                        style={{ width: 10, height: 10, marginTop: -10,}}
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/u_-MQZozUAZ.png"
                    />
                    <div
                        onMouseUp={handleMouseUp}
                        // onClick={onChange}
                        id="editor"
                        style={{ fontSize: 18, marginLeft:10 }}
                        contentEditable="true"
                        onKeyDown={onKeyDown}
                        className="input"
                    >
                        {Array.from(textInput).map((char, index) => (
                            <span key={ index}>{char}</span>
                        ))}
                    </div>
                </div>
                    {showPopup && 
                    <PopUpCreateEntity
                        width={"60%"}
                        placeholderInput={"Entity for "}
                        btnText={"Create Entity"}
                        onClickOutside={onClickPopUpCreate}
                        placeholderInput={entitySelect}
                        onClickBtn={onClickBtn}
                    />
                    }
                <div className="choose_intent">
                    <div className="conten_1">
                    <div>Intent</div>
                    <div onClick={openPopup} className="conten_2">
                        <div style={{ fontSize: 14, marginLeft: 10 }}>
                        Choose or add intent
                        </div>
                        <img
                        style={{ width: 10, height: 10, marginRight: 15 }}
                        src="https://image.flaticon.com/icons/png/128/25/25243.png"
                        />
                    </div>
                    {popupIntent && 
                    <PopUpCreateEntity
                        width={"60%"}
                        top={"42px"}
                        left={"53px"}
                        placeholderInput={"Entity for "}
                        btnText={"Create Entity"}
                        onClickOutside={onClickOutside}
                        />
                    }
                    </div>
                    <div className="Out_of_Scope">Out of Scope ​</div>
                </div>
                <ListEntity />
                <div className="add_trait">
                    <a href="#" className="text_add_trait">
                    Add trait
                    </a>
                </div>
                <button className="buttom"> Train to Value </button>
            </div>
          </div>
       
    )
}

export default Home
