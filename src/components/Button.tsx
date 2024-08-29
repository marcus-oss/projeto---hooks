import { ForwardedRef, forwardRef, RefObject } from "react";

interface ButtonProps {
  title: string;
  ref: RefObject<HTMLButtonElement>;
}

function Button(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <button ref={ref} onClick={() => window.alert("olá função")}>
      {props.title}
    </button>
  );
}

export default forwardRef(Button);
