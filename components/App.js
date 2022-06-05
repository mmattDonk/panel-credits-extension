import axios from "axios";
import React from "react";
import Authentication from "../helpers/Authentication";
import PanelComponent from "./Panel";


const BASE_URL = "https://api.mmatt.net/panelsapi" 

async function getPanels(twitch_id) {
  let resp;

  try {
    resp = await axios.get(`${BASE_URL}/panels/${twitch_id}`);
  } catch (e) {
    console.log(e);
  }

  return resp.data
}

export default class App extends React.Component {
  state = {
    finishedLoading: false,
    theme: "light",
    isVisible: true
  };

  constructor(props) {
    super(props);
    this.Authentication = new Authentication();
  }

  contextUpdate(context, delta) {
    if (delta.includes("theme")) {
      this.setState(() => {
        return { theme: context.theme };
      });
    }
  }

  componentDidMount() {
    this.twitch = window.Twitch ? window.Twitch.ext : null;

    if (this.twitch) {
      this.twitch.onAuthorized(async auth => {
        const channelId = auth.channelId
        this.Authentication.setToken(auth.token, auth.userId);
      
        if (!this.state.finishedLoading) {
          let channelPanels = await getPanels(channelId)
          this.panels = channelPanels

          this.setState({
            finishedLoading: true
          });
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.twitch) {
      this.twitch.unlisten("broadcast", () =>
        console.debug("Successfully unlistened")
      );
    }
  }

  render() {
    if (this.state.finishedLoading) {
      return (
        <div className="App">
           <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
          <div
            className={this.state.theme === "light" ? "App-light" : "App-dark"}
          >
            { this.panels.length >= 1 ? (
              this.panels.map(panel => {
                return <PanelComponent key={panel.id} {...panel} />
              })
            ) : <div>No panels found</div>
            }
          </div>
        </div>
      );
    } else {
      return <div className="App"></div>;
    }
  }
}
