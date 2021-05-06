import React, { useState } from "react"
import { getRandomIntInclusive } from "../utilities"
import Button from "./Button"
import emotes from "../images/emotes"
import Emote from "./Emote"

const RandomEmoteButton = ({ onClick, ...props }) => {
  const [currentEmote, setCurrentEmote] = useState(emotes[0])

  const handleClick = e => {
    if (emotes && emotes.length > 0) {
      setCurrentEmote(emotes[getRandomIntInclusive(0, emotes.length - 1)])
    }

    onClick(e)
  }

  return (
    <Button type="button" onClick={handleClick} {...props}>
      <Emote src={currentEmote} alt="Spin" height={32} />
      <span>New Name</span>
      <Emote src={currentEmote} alt="Spin" height={32} />
    </Button>
  )
}

export default RandomEmoteButton
