import React from 'react'
import { Autocomplete } from "@mui/material"
import { useState } from 'react'
import Country from '../../mocks/country.json'

import {
  Grid,
  TextField,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Typography
} from "@mui/material";

const country = [...Country]
const Hotels = () => {
   const [dest, setDest] = useState("")
   const [flyDate, setFlyDate] = useState("")
   const [inputDest, setInputDest] = useState("")
	
   const handleDestination = (newVal) => {
    setDest(newVal);
   }

   const handleFly = (e) => {
    setFlyDate(e.target.value);
   }

	
   return(
      <div className='sectionContainer grid'>
	  <div className='searchInputs flex'>
             <div className='singleInput flex'>
	         <div className='texts'>
	            <Autocomplete
                        value={dest}
                        inputValue={inputDest}
                        onChange={(event, newValue) => {
                        handleDestination(newValue);
                        }}
                        onInputChange={(event, newInputValue) => {
                        setInputDest(newInputValue);
                        }}
                        getOptionLabel={(option) => (option.name?option.name:'')}
                        options={ country }
                        style={{ width: 250 }}
                        renderInput={(params) => (
                        <TextField {...params} label="Country" variant="outlined" />
                       )}/>
	         </div>
             </div>

	     <div className='singleInput flex'>
                 <div className='texts'>
	            <TextField label="Intended Flying Date"
                        type="date"
                        value={ flyDate }
                        onChange={ handleFly }
                        variant="outlined"
                        style={{ width: 150 }}
                        InputLabelProps={{
                        shrink: true
                        }}
                     />
	         </div>
             </div>

	     <div className='singleInput flex'>
                 <div className='texts'>
                 </div>
             </div>

	     <div className='singleInput flex'>
                 <div className='texts'>
                 </div>
             </div>

	     <div className='singleInput flex'>
                 <div className='texts'>
                 </div>
             </div>

	     <div className='searchBtn flex'>
                <button className='btn btnBlock'>Search</button>
             </div>

	  </div> 
      </div>
   )
}

export default Hotels

