import * as React from "react";
import Frame from "../components/Frame";
import { EmbedProps as Props } from ".";

export default class Terrastruct extends React.Component<Props> {
  static ENABLED = [
    /^https?:\/\/(app\.)?(terrastruct\.com)\/diagrams\/(?<diagramId>[0-9]{1,})(?:.*)?$/,
  ];

  render() {
    const { matches } = this.props.attrs;
    const diagramId = matches.groups?.diagramId;

    return (
      <Frame
        {...this.props}
        src={`https://app.terrastruct.com/diagrams/${diagramId}`}
        title="Terrastruct Embed"
      />
    );
  }
}
