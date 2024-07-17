import {useRef } from 'react'
import Matrix from './components/Matrix'
function App() {
  let elements = document.getElementsByClassName('element');
  let box = useRef([]);
  let seq = [];
  let changeToGreen = (event) =>{
    if(seq.length < 9){
      event.target.style.backgroundColor = 'green';
      if(!seq.includes(event.target.id))seq.push(event.target.id);
      if(seq.length == 9 ){
        lastClicked();
      }
    }
  }
  let lastClicked = ()=>{
      seq.map((el,index) =>{
        setTimeout(()=>{
          box.current[el].style.backgroundColor = 'orange';
        },1000*(index+1) )
      })
  }
  let refresh = ()=>{
      Object.keys(box.current).map((el)=>{
        box.current[el].style.backgroundColor = 'white';
      })
      seq = [];
  }
  return (
    <>
      <Matrix box={box} changeToGreen={changeToGreen} lastClicked={lastClicked} refresh={refresh}></Matrix>
    </>
  )
}

export default App
