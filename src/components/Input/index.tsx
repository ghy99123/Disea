import { InputHTMLAttributes, forwardRef } from "react";
import { InputWrapper, Label, Input } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { label, placeholder, ...otherProps } = props;

    return (
      <InputWrapper>
        <Label>{label}</Label>
        <Input ref={ref} placeholder={placeholder} {...otherProps} />
      </InputWrapper>
    );
  }
);

export default InputWithLabel;
