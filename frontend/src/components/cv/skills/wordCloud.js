import React from "react"

const WordCloud = ({ entries }) => {
  const words = entries.map((e, i) => (
    <span key={i} className={`wc-${e.rating}`}>
      {e.name}
    </span>
  ))
  return <div className="word-cloud">{words}</div>
}

export default WordCloud
