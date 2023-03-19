import { useEffect, useState, useRef } from "react";

const P: React.FunctionComponent<{
  children: React.ReactNode;
  classes?: string;
  sectionRef: HTMLDivElement;
  overflow?: string;
  notOverflow?: string;
}> = ({ children, classes, sectionRef, overflow, notOverflow }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isLarge, setLarge] = useState(false);

  useEffect(() => {
    if (ref.current && sectionRef) {
      const myWith = ref.current.clientWidth + 16;
      const parentWidth =
        sectionRef.clientWidth -
        parseFloat(
          getComputedStyle(sectionRef).paddingInline.replace("px", "")
        ) *
          2;

      if (myWith > parentWidth) {
        setLarge(true);
      } else {
        setLarge(false);
      }
    }
  });

  return (
    <p
      ref={ref}
      className={`font-manrope select-none antialiased break-words break-all ${classes} ${
        isLarge ? overflow : notOverflow
      }}`}
    >
      {children}
    </p>
  );
};

export default P;
