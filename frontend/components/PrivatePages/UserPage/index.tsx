import React from 'react'
import Topbar from "./TopBar";
import PageFoot from "./PageFoot";
import Main from "./Main";
import SideBar from './SideBar';
import ChatArea from './ChatArea';

export default function UserPage() {
  return (
    <>
      <Topbar/>
      <Main>
        <SideBar/>
        <ChatArea/>
      </Main>
      <PageFoot/>
    </>
  )
}
