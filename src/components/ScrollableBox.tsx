import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";

type ScrollabelBoxProps = PropsWithChildren<{
  width: number;

  height: number;
}>;

export type ScrollableRef = {
  scrollToBottom: () => void;
};

export default forwardRef<ScrollableRef, ScrollabelBoxProps>((props, ref) => {
  const currentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      scrollToBottom() {
        if (currentRef.current) {
          currentRef.current.scrollTop = currentRef.current?.scrollHeight;
        }
      },
    }),
    []
  );

  return (
    <div
      ref={currentRef}
      style={{
        width: props.width,
        height: props.height,
        overflow: "auto",
        border: "1px solid #ccc",
      }}
    >
      {props.children}
    </div>
  );
});
