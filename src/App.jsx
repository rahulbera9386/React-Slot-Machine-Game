import React from "react";
import SlotM from './Slot';

const MainData=()=>{
return(
  <>
    <h1 className="h1-head">Welcome To My Slot Machine Game</h1>
    
    <div className='slotmachine'>
    <SlotM x="😃" y="😃" z="😃"/>
    <hr/>
    <SlotM x="😃" y="😃" z="😃"/>
    <hr/>
    <SlotM x="😃" y="🙋‍♂️" z="😃"/>
    <hr/>
    </div>
  </>
);
};
export default MainData;