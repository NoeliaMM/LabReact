import { ErrorComponent } from "@/common/components";
import React, { ReactNode } from "react";
// import classes from "./input.component.module.css"


interface Props {
  infoLabel?:string,
  label: ReactNode,
  type?: string;
  name: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent: React.FC<Props> = (props) => {
  const { infoLabel,label, type, name, error, onChange } = props;

  return (
    <div>
      <p>{infoLabel}</p>
      <div>
      <label  htmlFor={name}>{label}</label>
      <input name={name} type={type} onChange={onChange} />
        <ErrorComponent error={error}/>
      </div>
    </div>
  );
};
