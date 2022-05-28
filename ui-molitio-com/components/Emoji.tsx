import React from "react";
import { EmojiProps } from "../interfaces/EmojiProps";
const Emoji: React.FC<EmojiProps> = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;
