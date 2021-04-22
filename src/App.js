import React, { useState } from "react";
import "./App.css";
import "./access/css/style.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Home from "./container/Home";
import Intents from "./container/Intents";
import Entities from "./container/Entities";
import Traits from "./container/Traits";
import Utterances from "./container/Utterances";
import Setting from "./container/Setting";
import Insights from "./container/Insights";
import ChatView from "./container/ChatView";

function App() {
  const [activePage, setActivePage] = useState("/");

  return (
    <div className="App">
      {/* header */}
      <div className="header"></div>
      <div className="body">
        <div className="tabbar">
          <NavLink
            style={
              activePage == "/" && {
                borderLeftWidth: 4,
                borderLeftStyle: "solid",
                borderLeftColor: "cornflowerblue",
              }
            }
            onClick={() => setActivePage("/")}
            to="/"
            className="understanding"
          >
            <div>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/bBFFm_nHhfQ.png"
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 10,
                }}
              />
            </div>
            <div
              style={{
                paddingLeft: 10,
                fontWeight: "bold",
              }}
            >
              Understanding
            </div>
          </NavLink>
          <NavLink
            // style={
            //   activePage == "/Chatview" && {
            //     borderLeftWidth: 4,
            //     borderLeftStyle: "solid",
            //     borderLeftColor: "cornflowerblue",
            //   }
            // }
            onClick={() => setActivePage("/Chatview")}
            to="/Chatview"
            // to="/"
            className="understanding"
          >
            <div>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/bBFFm_nHhfQ.png"
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 10,
                }}
              />
            </div>
            <div
              style={{
                paddingLeft: 10,
                fontWeight: "bold",
              }}
            >
              Test Chat
            </div>
          </NavLink>
          <div
            style={
              activePage != "/" && activePage != "/insights"
                ? {
                    borderLeftWidth: 4,
                    borderLeftStyle: "solid",
                    borderLeftColor: "cornflowerblue",
                  }
                : {}
            }
            className="managerment"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/876/876171.svg?token=exp=1619004458~hmac=3deb238bf4a06922543e862e6198dbcd"
                style={{ width: 12, height: 12, marginRight: 7 }}
              />
              <h4>Managerment</h4>
            </div>
            <ul className="navMenu">
              <li className="navItem">
                <NavLink
                  style={activePage == "/intents" ? { color: "blue" } : {}}
                  onClick={() => setActivePage("/intents")}
                  className="linkNav"
                  to="/intents"
                >
                  Intents
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  style={activePage == "/entities" ? { color: "blue" } : {}}
                  onClick={() => setActivePage("/entities")}
                  className="linkNav"
                  to="/entities"
                >
                  Entities
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  style={activePage == "/traits" ? { color: "blue" } : {}}
                  onClick={() => setActivePage("/traits")}
                  className="linkNav"
                  to="/traits"
                >
                  Traits
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  style={activePage == "/utterances" ? { color: "blue" } : {}}
                  onClick={() => setActivePage("/utterances")}
                  className="linkNav"
                  to="/utterances"
                >
                  Utterances
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  style={activePage == "/setting" ? { color: "blue" } : {}}
                  onClick={() => setActivePage("/setting")}
                  className="linkNav"
                  to="/setting"
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            style={
              activePage == "/insights"
                ? {
                    borderLeftWidth: 4,
                    borderLeftStyle: "solid",
                    borderLeftColor: "cornflowerblue",
                  }
                : {}
            }
            onClick={() => setActivePage("/insights")}
            className="Insights"
            to="/about"
          >
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/876/876171.svg?token=exp=1619004458~hmac=3deb238bf4a06922543e862e6198dbcd"
              style={{ width: 12, height: 12, marginRight: 7 }}
            />
            Insights
          </Link>
        </div>
        <div className="conten">
          <Route path="/" exact="true" component={Home} />
          <Route path="/intents" component={Intents} />
          <Route path="/Entities" component={Entities} />
          <Route path="/Traits" component={Traits} />
          <Route path="/Utterances" component={Utterances} />
          <Route path="/Setting" component={Setting} />
          <Route path="/Insights" component={Insights} />
          <Route path="/Chatview" component={ChatView} />
        </div>
      </div>
    </div>
  );
}

export default App;
