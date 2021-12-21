import React from 'react'
import {ContentList} from "./styles";

export function SubTasks({value, textList,src, alt}) {
  return (
    <ContentList >
    <div className="sub-tasks">
    <input type="checkbox" value={value} color="green" className="sub"/>
    <li>{textList}</li>
    </div>
    <button className="btn">
      <img src={src} alt={alt} />
    </button>
  </ContentList>
  )
}


