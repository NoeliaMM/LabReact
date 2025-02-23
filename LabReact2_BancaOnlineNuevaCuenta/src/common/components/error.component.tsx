import React from "react";
import classes from "./error.component.module.css";

interface Props {
  error: string;  
}

export const ErrorComponent: React.FC<Props> = (props) => {

  const { error } = props;

  return (
    <p className={classes.error}>{error}</p>
  );
};