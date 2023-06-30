import React from "react";
import PropTypes from "prop-types";

export default function MsgProps(props)
{
  return(
    <span>
      <b>Msg </b> {props.msg} <br/>
    </span>
  );
}

MsgProps.propTypes = {
  msg: PropTypes.string.isRequired,
};

MsgProps.defaultProps = {
  msg: "Mensagem Padrão",
};
