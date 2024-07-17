import { useRef } from "react";


function Matrix({box,changeToGreen,refresh}){
    
    return(
        <>
            <div className="matrix">
                   <div className="row-one">
                      <div className="element" ref={ref => box.current.one = ref} id="one" onClick={changeToGreen}></div>
                      <div className="element" ref={ref => box.current.two = ref} id="two" onClick={changeToGreen}></div>
                      <div className="element" ref={ref => box.current.three = ref} id="three" onClick={changeToGreen}></div>
                   </div>
                   <div className="row-two">
                      <div className="element" id="four" ref={ref => box.current.four = ref} onClick={changeToGreen}></div>
                      <div className="element" id="five" ref={ref => box.current.five = ref} onClick={changeToGreen}></div>
                      <div className="element" id="six" ref={ref => box.current.six = ref} onClick={changeToGreen}></div>
                   </div>
                   <div className="row-three">
                      <div className="element" id="seven" ref={ref => box.current.seven = ref} onClick={changeToGreen}></div>
                      <div className="element" id="eight" ref={ref => box.current.eight = ref} onClick={changeToGreen}></div>
                      <div className="element" id="nine" ref={ref => box.current.nine = ref} onClick={changeToGreen}></div>
                   </div>
            </div>
            <button className="btn" onClick={refresh}>Refresh</button>
        </>
    )
}

export default Matrix;