import React from 'react'
import { NavTopBanner } from '../components/navbar/NavTopBanner'

export const Lectures = () => {
  const myText = "Lectures"
  const buttonList = [
    { 
      label : "Bookmarks",
      link:"/bookmarks"
    },
  ];
  return (
    <NavTopBanner myText={myText} buttonList={buttonList} />
  )
}
