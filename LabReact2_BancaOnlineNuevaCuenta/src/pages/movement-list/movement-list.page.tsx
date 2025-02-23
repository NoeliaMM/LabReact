import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { MovementVm } from "./movement-list.vm";
import { getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";
import { MovementListHeaderComponent } from "./components";

export const MovementListPage: React.FC = () => {
  const { accountId } = useParams<{ accountId?: string }>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

  React.useEffect(() => {

      getMovements(accountId).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
      ).catch((error) => console.error("Error fetching movements", error));    
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent accountId={accountId || ''} />
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
