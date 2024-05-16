import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <>
      <li className=" m-5 bg-white border-b rounded-[16px]" {...props}>
        <header
          role="button"
          onClick={() => setSelected(open ? null : value)}
          className="flex items-center justify-between py-[24px] px-[32px] text-base font-semibold leading-6 tracking-tighter text-Content-Primary "
        >
          {trigger}
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </header>
        <div
          className="overflow-y-hidden transition-all"
          style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
        >
          <div
            className="p-8 pt-2 text-base font-normal leading-7 tracking-tighter text-Content-Secondary "
            ref={ref}
          >
            {children}
          </div>
        </div>
      </li>
    </>
  );
}
