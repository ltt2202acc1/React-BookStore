import { useState, useEffect } from "react";
import { Plus, Minus } from "phosphor-react";
function InputStepper({ amount }) {
  let [count, setCount] = useState(1);
  useEffect(() => {
    if (count > amount) {
      setCount(amount);
    }
    if (count === "") {
      setCount(1);
    }
  }, [count]);
  const handlingCount = (action) => {
    if (action === "+" && action + 1 <= amount) {
      setCount(++count);
    } else if (action == "-" && count - 1 > 0) {
      setCount(--count);
    }
  };
  const handlingInput = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setCount(result);
  };
  return (
    <div>
      <div className="text-sm">Số lượng:</div>
      <div className="flex border-2 rounded-lg w-32  h-10 justify-between ">
        <button className="pl-2" onClick={() => handlingCount("+")}>
          <Plus size={16} />
        </button>

        <div>
          <input
            className="w-12 border-0 text-center leading-3 "
            type="text"
            value={count}
            onChange={handlingInput}
          />
        </div>

        <button className="pr-2" onClick={() => handlingCount("-")}>
          <Minus size={16} />
        </button>
      </div>
    </div>
  );
}

export default InputStepper;
