import React from 'react'
import {ContentSub} from "./styles";

export function SubTasks({value, textList,src, alt}) {
  return (
    <ContentSub >
    <div className="sub-tasks">
    <input type="checkbox" value={value} color="green" className="sub"/>
    <li>{textList}</li>
    </div>
    <button className="btn">
      <img src={src} alt={alt} />
    </button>
  </ContentSub>
  )
}


