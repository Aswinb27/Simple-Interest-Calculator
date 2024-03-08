
  
import { Button, Stack, TextField } from '@mui/material';
  
import './App.css';
import { useState } from 'react';

function App() {

  const [principle,setPrinciple]=useState("");
  const [rate,setRate]=useState("");
  const [year,setYear]=useState("");
  const[interet,setInterest]=useState("0");


  
  
  const calculateInterest = (reload)=>{
    reload.preventDefault()
    console.log(principle,rate,year);

    if(!principle||  !rate || !year){
      alert("Please fill the form...")
    }
    else{
      setInterest(principle*rate*year/100)
    }

  }

  const resetForm = ()=>{
      setPrinciple("")
      setRate("")
      setYear("")
      setInterest(0)
  }
  return (
    <>
      <div className="app">


        <div className="container">
          {/* Heading section  */}

          <div className="heading-text">
            <h3 className="title">SIMPLE CALCULATOR</h3>
            <p className="title-para"> CALCULATE YOUR SIMPLE INTEREST</p>
          </div>

          <div className="amount-card">

            <div className="card-text">

              <h3 className='total-amount'>₹{interet}</h3>
              <p className="total-para">Total Simple Interest</p>
            </div>

          </div>


          <form onSubmit={calculateInterest}>
            {/* To hold text field  */}

            <div className="text-fields">

              {/* principle amount  */}

              <div className="input">
                <TextField 
                          value={principle || ""}
                          onChange={e=>setPrinciple(e.target.value)}
                className='outline-basic' id="filled-basic" label="Princile-amount"  variant="standard"/>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />  */}
              </div>

              {/* Interest  */}


              <div className="input">
                <TextField
                          value={rate || ""}
                          onChange={e=>setRate(e.target.value)}
                className='outline-basic' id="filled-basic" label="Rate of interest (p.a)%" variant="standard" />
              </div>

              {/* year  */}


              <div className="input">
                <TextField
                          value={year || ""}
                          onChange={e=>setYear(e.target.value)}
                className='outline-basic' id="filled-basic" label="Time period(yr)" variant="standard" />
              </div>


              {/* buttons  */}

              <div className="btn-group">

                <Stack direction="row" spacing={2}>
                  <Button type='submit' className='btn' style={{backgroundColor:"gray"}} variant="contained">Calculate</Button>
                  <Button  onClick={resetForm} className='btn' variant="outlined">reset</Button>
                </Stack>

              </div>

            </div>

          </form>


        </div>


      </div>
    </>
  );
}

export default App;