import React from "react";
import MsgProps from "./MsgProps";

const valor = 12;

export default function MsgMain()
{
  return (
    <div>
      <MsgProps msg="Mensagem 1"/>
      <MsgProps msg="Mensagem 2"/>
      <MsgProps/>
    </div>
  );
}
