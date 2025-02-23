import { HeaderPageComponent } from "@/common/components";
import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css";
import { AccountCreateFormComponent } from "./components";

export const AccountPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
        <HeaderPageComponent title="Cuenta Bancaria" />
        <AccountCreateFormComponent />
      </div>
    </AppLayout>
  );
};
