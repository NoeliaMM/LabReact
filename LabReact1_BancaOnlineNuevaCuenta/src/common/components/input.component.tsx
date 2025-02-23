import { ErrorComponent } from "@/common/components";
import React, { ReactNode } from "react";


interface Props {
  infoLabel?:string,
  label: ReactNode,
  type?: string;
  name: string;
  error: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent: React.FC<Props> = (props) => {
  const { infoLabel,label, type, name, error,className, onChange } = props;

  return (
    <>
      <div>
      <p>{infoLabel}</p>   
      <label  htmlFor={name}>{label}</label>
      <input 
      className={className}
      name={name} 
      type={type} 
      onChange={onChange} />
      <ErrorComponent error={error}/>
      </div>    
    </>
  );
};
