import React from "react";
import classes from './login-form.component.module.css';
interface Props {
    id: string;
    type: string;
    placeholder: string;
    value: string;
    error: string;
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFormComponent: React.FC<Props> = (props) => {
    
    const { id, type, placeholder, value, error, onChange } = props;
    
    return (
            <div>
            <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={error ? classes.inputError : ""}
            />
        {error && <p className={classes.error}>{error}</p>}
        </div>

    )
}