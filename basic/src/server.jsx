import { useState, memo ,useRef ,useEffect} from 'react'

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
