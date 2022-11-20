import styled from "styled-components";

type InputType = 'text'  | 'email' | 'password';

interface IPropsInput {
    label?: string;
    value: string;
    onChange: (val: string) => void;
    placeholder: string;
    type: InputType;
}

const Label = styled.h5`
 color: var(--text-color);
 margin-bottom: 5px;
`;

const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  min-width: 300px;

`;

const Input = ( {placeholder, type, value, label = '', onChange}: IPropsInput) => {
  return (
    <div>
        {label.length > 0 && <Label>{label}</Label>}    
        <StyledInput value={value} type={type} placeholder={placeholder} onChange={(event) => { onChange(event.target.value) }} />
    </div>
  )
}

export default Input;