import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-item.module.css";

interface Props {
  movement: MovementVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movement } = props;

  return (
    <>
      <div className={classes.row}>
        <span className={classes.dataCell}>
          {movement.transaction.toLocaleDateString()}
        </span>
        <span className={classes.dataCell}>          
          {movement.realTransaction.toLocaleDateString()}
        </span>
        <span className={classes.dataCell}>{movement.description}</span>
        <span className={`${classes.dataCell} ${classes.alignRight} ${movement.amount < 0 ? classes.negative : ""} ${classes.currency}`}>
          {movement.amount}
        </span>
        <span className={`${classes.dataCell} ${classes.alignRight} ${movement.balance < 0 ? classes.negative  : ""} ${classes.currency}`}>
          {movement.balance}
        </span>
      </div>
    </>
  );
};
