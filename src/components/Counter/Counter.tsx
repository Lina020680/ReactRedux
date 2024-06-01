import Button from "components/Button/Button";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const onMinus = ()=>{
    setCount(prevValue => prevValue - 1)
  }

  const onPlus = ()=>{
    setCount(prevValue => prevValue + 1)
  }

  const onMultiply = ()=>{
    setCount(prevValue => prevValue * 2)
  }

  const onDivide = ()=>{
    setCount(prevValue => Number ((prevValue / 2).toFixed(2)))
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinus} name="-" />
        <Button onButtonClick={onDivide} name="/" />
      </ButtonControl>
      <CounterResult>{count}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlus} name="+" />
        <Button onButtonClick={onMultiply} name="*" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
