import React from "react";
import classes from "./header-page.component.module.css";

interface Props {
  title: string;
  buttonText?: string;
  action?: () => void;  
}

export const HeaderPageComponent: React.FC<Props> = (props) => {

  const { title, buttonText, action } = props;

  return (
    <div className={classes.headerContainer}>
     <h1>{title}</h1>
      {buttonText && action && (
        <button onClick={action}>{buttonText}</button>
      )}
  </div>
  );
};