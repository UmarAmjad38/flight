import React from 'react'

import { GoArrowSwitch } from "react-icons/go"
import { useState } from 'react'
import CityJSON from '../../mocks/cities.json'
import { useNavigate } from 'react-router-dom'
//import DatePicker from 'react-datepicker'
import emailjs from 'emailjs-com'
import { Autocomplete } from "@mui/material"
import Box from '@mui/material/Box'
//import PassengerClassInput from './passengerClassInput'

import {
  Grid,
  TextField,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Typography
} from "@mui/material";


const cities = [...CityJSON]
const number = [
  { label: '1 Traveler', id: '1' },
  { label: '2 Travelers', id: '2' },
  { label: '3 Travelers', id: '3' },
  { label: '4 Travelers', id: '4' },
  { label: '5 Travelers', id: '5' },
  { label: '6 Travelers', id: '6' },
  { label: '7 Travelers', id: '7' },
  { label: '8 Travelers', id: '8' },
  { label: '9 Travelers', id: '9' }
  ]

const Search = () => {
  const [source, setSource] = useState("")
  const [dest, setDest] = useState("")
  const [selectTrip, setSelectTrip] = useState("one")
  const [inputSource, setInputSource] = useState("")
  const [inputDest, setInputDest] = useState("")
  const [deptDate, setDeptDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [traveler, setTraveler] = useState("")
  const [inputTraveler, setInputTraveler] = useState("")
 
// const [formData, setFormData] = useState({
  const handleSelectTrip = e => {
    setSelectTrip(e.target.value)
  }

  const handleSource = (newVal) => {
    setSource(newVal);
  }

  const handleDestination = (newVal) => {
    setDest(newVal);
  }

  const handleDeparture = (e) => {
    setDeptDate(e.target.value);
  }

  const handleReturn = (e) => {
    setReturnDate(e.target.value);
  }

  const handleTraveler = (newVal) => {
    setTraveler(newVal);
  }
 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //const formData = {source: source.name, dest: dest.name, deptDate: deptDate, returnDate: returnDate};
    let message = `Ticket price From:${source.code} To:${dest.code} Departure:${deptDate} Arrival:${returnDate} Passanger:${traveler.label}`;

    const form ={ 
          name: e.target.name.value,
	  email: e.target.email.value,
	  phone: e.target.phone.value,
	  message: message
    }
   // onSearch(formData)
//    console.log(form);
 //   navigate('/FlightList')
      try {
          emailjs.send('service_hyaaa7p','template_q99lnqg',form,'4f_SEVkr2esPmUGHZ');
      }catch(error) {
          console.log({error})
      }
      navigate('/Thankyou')
  };
	
  return(
	  <form onSubmit={handleSubmit}> 
	  <div className='sectionContainer grid'>
	  
              <div className='radioBtn flex'>
	  	<RadioGroup row onChange={handleSelectTrip} value={selectTrip}>
	  	   <FormControlLabel
            		value="one"
            		control={<Radio sx={{color:'#ffbb00','&.Mui-checked': {color: '#ffbb00'}}} />}
            		label="One Way"
          		/>
          	   <FormControlLabel
            		value="both"
            		control={<Radio sx={{color:'#ffbb00','&.Mui-checked': {color: '#ffbb00'}}} />}
            		label="Round Trip"
          		/>
        	</RadioGroup>
              </div>

	      <div className='searchInputs flex'>

	        <div className='singleInput flex'>

	           <div className='texts'>
	                <Autocomplete
          		value={source}
          		inputValue={inputSource}
          		onChange={(event, newValue) => {
                        handleSource(newValue);
                        }}
          		onInputChange={(event, newInputValue) => {
            		setInputSource(newInputValue);
          		}}
          		getOptionLabel={(option) => (option.code?option.code:'')}
          		options={cities}
          		style={{ width: 250 }}
	                renderOption={(props, option) => (
			  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
				{option.name} ({option.code})
			  </Box>	
			)}
          		renderInput={(params) => (
	                <TextField {...params} label="From" variant="outlined"/>)} />
	           </div>
	        </div>

	         <div className='singleInput flex'>

                   <div className='iconDiv'>
                      <GoArrowSwitch className='icon' />
                   </div>

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
          		getOptionLabel={(option) => (option.code?option.code:'')}
          		options={cities}
          		style={{ width: 250 }}
	                renderOption={(props, option) => (
                          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                {option.name} ({option.code})
                          </Box>
                        )}
          		renderInput={(params) => (
            		<TextField {...params} label="To" variant="outlined" />
          		)}/>
	           </div>
                </div>
 
	        <div className='singleInput flex'>

                   <div className='texts'>
	              <TextField label="Departure"
          		type="date"
          		value={deptDate}
          		onChange={handleDeparture}
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
		      <TextField
            		label="Return"
            		type="date"
            		value={returnDate}
            		onChange={handleReturn}
            		variant="outlined"
	                style={{ width: 150 }}
            		InputLabelProps={{
              		shrink: true
            		}}
	  		disabled={selectTrip?.toUpperCase() === "ONE"}
          		/>
                   </div>
                </div>

	        <div className='singleInput flex'>

	 	   <div className='texts'>
	              <Autocomplete
        		value={traveler}
        		onChange={(event, newValue) => {
          		handleTraveler(newValue);
        		}}
        		inputValue={inputTraveler}
        		onInputChange={(event, newInputValue) => {
          		setInputTraveler(newInputValue);
        		}}
	  		getOptionLabel={(option) => (option.label?option.label:'')}
	                options={number}
	                style={{ width: 180 }}
        		renderInput={(params) => <TextField {...params} label="Travelers" variant="outlined" />}
      			/>
	  	   </div>
                </div>
	     </div>

             <div className="formbox flex">
	        <label for='name'>Name</label>
	        <input type='text' name='name' id='name' required/>
	        <label for='email'>Email</label>
                <input type='email' name='email' id='email' required/>
                <label for='phone'>Phone</label>
                <input type='text' name='phone' id='phone' maxlength='13' minlength='11' required/>
             </div>

	     <div className='searchBtn flex'>
	        <button type="submit" className='btn btnBlock'>Get Quote</button>
	     </div>
	  </div>
	  </form>
  )
}

export default Search
