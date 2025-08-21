import React from 'react'

import { GoArrowSwitch } from "react-icons/go"
import { useState } from 'react'
import CityJSON from '../../mocks/cities.json'
//import DatePicker from 'react-datepicker'
import { Autocomplete } from "@mui/material"
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

	
  return(
	  
	  <div className='sectionContainer grid'>
	  
              <div className='radioBtn flex'>
	  	<RadioGroup row onChange={handleSelectTrip} value={selectTrip}>
	  	   <FormControlLabel
            		value="one"
            		control={<Radio color="primary" />}
            		label="One Way"
          		/>
          	   <FormControlLabel
            		value="both"
            		control={<Radio color="primary" />}
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
          		getOptionLabel={(option) => (option.name?option.name:'')}
          		options={cities}
          		style={{ width: 250 }}
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
          		getOptionLabel={(option) => (option.name?option.name:'')}
          		options={cities}
          		style={{ width: 250 }}
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
	     
	     <div className='searchBtn flex'>
	        <button className='btn btnBlock'>Search Flight</button>
	     </div>
	  </div>
  )
}

export default Search
