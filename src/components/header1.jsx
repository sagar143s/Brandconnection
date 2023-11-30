import React from "react";

export default function Header1() {
  return (
    <>
      <div className="header1-main">
        <div className="header1-left">
          <a href="mailto:sales@brandconnectiontr.com" className="mail-link">
            {/* <span className="material-symbols-outlined">mail</span>
            <span>sales@brandconnectiontr.com</span> */}
          </a>
        </div>
        <div className="header1-right">
         <span className="material-symbols-outlined">mail</span>
         <a href="mailto:sales@brandconnectiontr.com"  style={{color:'#fff',textDecoration:'none'}}> <span>&nbsp;&nbsp;&nbsp;sales@brandconnectiontr.com</span></a>
        </div>
      </div>
    </>
  );
}
