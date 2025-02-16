import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { MovementVm } from "./movement-list.vm";
import { getMovementsByAccountId } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";
import { MovementListHeaderComponent } from "./components";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

  React.useEffect(() => {
    if (id) {
      getMovementsByAccountId(id).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
      );
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent accountId={id || ''} />
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
