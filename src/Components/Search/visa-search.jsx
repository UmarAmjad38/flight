import React from 'react'
import { Autocomplete } from "@mui/material"
import { useState } from 'react'
import Country from '../../mocks/country.json'
import {useNavigate} from 'react-router-dom'

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
const nationality = [ {name: 'BD'}]

const Visa = () => {
   const [dest, setDest] = useState("")
   const [flyDate, setFlyDate] = useState("")
   const [inputDest, setInputDest] = useState("")
   const [nat, setNat] = useState("")
   const [inputNat, setInputNat] = useState("")

   const handleDestination = (newVal) => {
    setDest(newVal);
   }

   const handleFly = (e) => {
    setFlyDate(e.target.value);
   }

    const handleNat = (newVal) => {
    setNat(newVal);
   }
  
   const navigate = useNavigate();
   const handleOnClick = () => {
      if (dest.name==='Thailand'){navigate('/VisaThailand')}
      if (dest.name==='Malaysia'){navigate('/VisaMalaysia')}	   
      if (dest.name==='Singapore'){navigate('/VisaSingapore')}	   
      if (dest.name==='United Arab Emirates'){navigate('/VisaUAE')}	   
      if (dest.name==='Vietnam'){navigate('/VisaVietnam')}	   
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
	            <Autocomplete
                        value={nat}
                        inputValue={inputNat}
                        onChange={(event, newValue) => {
                        handleNat(newValue);
                        }}
                        onInputChange={(event, newInputValue) => {
                        setInputNat(newInputValue);
                        }}
                        getOptionLabel={(option) => (option.name?option.name:'')}
                        options={ nationality }
                        style={{ width: 150 }}
                        renderInput={(params) => (
                        <TextField {...params} label="Nationality" variant="outlined" required />
                       )}
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

	     <div className='searchBtn flex'>
                <button className='btn btnBlock' onClick={handleOnClick} >Search</button>
             </div>

	  </div> 
      </div>
   )
}

export default Visa

