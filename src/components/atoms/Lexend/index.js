import React, { useEffect, useState } from "react";
import { LexendStyle } from "./style";

export default function Lexend({ text, size, weight, color }) {
  const [teste, setTeste] = useState("");

  // function teste2() {
  //   setTeste("OI");
  //   console.log("teste", teste, text);
  // }

  // useEffect(() => {
  //   teste2();
  // }, [text]);

  return (
    <LexendStyle size={size} weight={weight} color={color}>
      {text}
    </LexendStyle>
  );
}
