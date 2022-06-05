import { Container } from "@mantine/core";
import React from "react";

export default class Config extends React.Component {
  render() {
    return (
      <Container>
        <h1>Use the Panel Credits website to configure Panel Credits</h1>
        <p>
          Head on over to{" "}
          <a href="https://panel-credits.vercel.app/" target="_blank">
            https://panel-credits.vercel.app/
          </a>{" "}
          to give your viewers credits, and to accept/reject panels.
        </p>
        <p>
          Your viewers should also login to the website so they can setup an
          'account' with you. Tell them to:
          <ol>
            <li>Login</li>
            <li>"Go to Viewer Dashboard"</li>
            <li>Click on your name to create an account with you.</li>
          </ol>
        </p>
      </Container>
    );
  }
}
