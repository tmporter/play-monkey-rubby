import React, { useState } from "react"
import { getRandomIntInclusive } from "../utilities"
import RandomEmoteButton from "./RandomEmoteButton"
import names from "../names.json"

const RandomNameSpinner = () => {
  const [pay, setPay] = useState("Play")
  const [money, setMoney] = useState("Monkey")
  const [wubby, setWubby] = useState("Rubby")

  const handleClick = e => {
    setPay(names.pay[getRandomIntInclusive(0, names.pay.length - 1)])
    setMoney(names.money[getRandomIntInclusive(0, names.money.length - 1)])
    setWubby(names.wubby[getRandomIntInclusive(0, names.wubby.length - 1)])
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4vw" }}>{`${pay} ${money} ${wubby}`}</h1>
      
      <RandomEmoteButton
        style={{ minWidth: "6rem" }}
        onClick={handleClick}
      />
    </div>
  )
}

export default RandomNameSpinner
