import { ErrorComponent } from "@/common/components";
import React, { ReactNode } from "react";
// import classes from "./select.component.module.css"

interface Option {
  id:string | number;
  label:string;
}

interface Props {
  infoLabel?:string,
  label: ReactNode,
  name: string;
  value: string | number;
  options: Option[];
  error: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectComponent: React.FC<Props> = (props) => {
  const { infoLabel,label,  name, value,options, error,className, onChange } = props;

  return (
        <div>
         <p>{infoLabel}</p>
          <label>{label}</label>
          <select
            className= {className || ""}
            name={name}
            onChange={onChange}
            value={value}
          >
            <option value="">Seleccione una cuenta</option>
            {options.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}        
          
          </select>         
           <ErrorComponent error={error}/>
        </div>        
  );
};
