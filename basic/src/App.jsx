import { useState, memo ,useRef ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//
//
// const MyComp = memo(function MyComp({ name }) {
//   return (
//     <>
//       <p>{name}</p>
//     </>
//   )
// })
//
//
//
// function App() {
//   const [count, setCount] = useState(0)
//   const inputRef = useRef();
//
//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={() => inputRef.current.focus()}>focus</button>
//
//       <MyComp name="Kiran" />
//     </>
//   )
// }
//
//
//
//
// //map()
//
// // let arr = [1,2,3,4];
// // let str = arr.map(nums => nums*2);
// //
// // let max = Math.max(...arr)
// // let removeDup = array.filter((value ,index) => arr.indexOf((value) == index);
// // let merge = arr1.concat(arr2)
// //
// // console.log(str);
//
//
//
//
// {/* <BrowserRouter> */}
// {/*   <Router> */}
// {/*     <Route path="/" element={<Honme />}> */}
// {/*   </Router> */}
// {/* </BrowserRouter> */}




function App() {
  const [holiday, setHoliday] = useState([]);

  useEffect(() => {
    fetch("https://date.nager.at/api/v3/PublicHolidays/2024/US")
      .then((res) => res.json())
      .then((data) => setHoliday(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <h1>The list of US public holidays for 2024</h1>

      {holiday.map((d, index) => (
        <p key={index}>
          {d.date} — {d.localName}
        </p>
      ))}

      <p>Total Holidays: {holiday.length}</p>
    </>
  );
}

export default App;


