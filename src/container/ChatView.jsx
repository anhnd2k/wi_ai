import React from "react";
import "../base/chatview.css";

function ChatView() {
  return (
    <div className="chat-tab">
      <div className="box-chat">
        <div className="boss-chat">
          <h5>Hi Truong</h5>
        </div>
        <div className="boss-chat">
          <h5>
            Hi how can i help u ? u can get me a messenger and i will check it
            and anwser to u
          </h5>
        </div>
        <div className="user-chat">
          <h5>I'm have so much money but i don't know how i can using it.</h5>
        </div>
        <div className="boss-chat">
          <h5>i understand u problem and i like it.</h5>
        </div>
        <div className="user-chat">
          <h5>Can U help me please ?.</h5>
        </div>
        <div className="user-chat">
          <h5>I going home </h5>
        </div>
        <div className="boss-chat">
          <h5>i don't care :v .</h5>
        </div>
        <div className="chat-send">
          <input placeholder="Input your message !!!" />
          <h3 className="resetbtn">Reset</h3>
          <h3 className="sendbtn">Send</h3>
        </div>
      </div>
    </div>
  );
}

export default ChatView;
