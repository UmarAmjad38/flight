import React from 'react'
import { useState } from 'react'
import { Autocomplete } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import {
  Grid,
  TextField,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Typography
} from "@mui/material";


const category = [
{ label: 'Domestic', id:'1'},
{ label: 'International', id:'2'}
]

const Domestic = [
       { label: 'Cox`sBazar', id: '1' },
]	

const International = [
	{ label: 'Thailand', id: '1' },
	{ label: 'Malaysia', id: '2' }, 
	{ label: 'Maldives', id: '3' }, 
	{ label: 'Nepal', id: '4' }, 
	{ label: 'Dubai', id: '5' }, 
	{ label: 'Singapore', id: '6' }, 
	{ label: 'Vietnam', id: '7' }, 
	{ label: 'SriLanka', id: '8' } 
]

let type = null;

const SearchPkg = () => {

   const [cat, setCat] = useState(category[0])
   const [inputCat, setInputCat] = useState("")
   const [dest, setDest] = useState("")
   const [inputDest, setInputDest] = useState("")

   const handleCat = (newVal) => {
    setCat(newVal);
   }

   const handleDest = (newVal) => {
    setDest(newVal);
   }

   if(cat.label=="Domestic"){
        type = Domestic;
   } else if (cat.label=="International"){
        type = International;
   }

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      // console.log(dest.label);
       e.preventDefault();
       if (dest.label==='Thailand'){	   
       navigate('/Thailand')
       }
       if (dest.label==='Malaysia'){
       navigate('/Malaysia')
       }
       if (dest.label==='Maldives'){
       navigate('/Maldives')
       }
       if (dest.label==='Dubai'){
       navigate('/Dubai')
       }
        if (dest.label==='Singapore'){
       navigate('/Singapore')
       }
        if (dest.label==='Vietnam'){
       navigate('/Vietnam')
       }
        if (dest.label==='Nepal'){
       navigate('/Nepal')
       }
        if (dest.label==='SriLanka'){
       navigate('/SriLanka')
       }
       if (dest.label==='Cox`sBazar'){
       navigate('/CoxsBazar')
       }

	   
   }
	
   return(
       <div className='sectionContainer grid'>
          <div className='searchInputs flex'>
             <div className='singleInput flex'>
	        <div className='texts'>
	           <Autocomplete
                        value={cat}
                        onChange={(event, newValue) => {
                        handleCat(newValue);
                        }}
                        inputValue={inputCat}
                        onInputChange={(event, newInputValue) => {
                        setInputCat(newInputValue);
                        }}
                        getOptionLabel={(option) => (option.label?option.label:'')}
                        options={category}
	                defaultSelectedKey="Domestic"
                        style={{ width: 180 }}
                        renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
                    />
                </div>
             </div>
             
	     <div className='singleInput flex'>
	         <div className='texts'>
                     <Autocomplete
                        value={dest}
                        onChange={(event, newValue) => {
                        handleDest(newValue);
                        }}
                        inputValue={inputDest}
                        onInputChange={(event, newInputValue) => {
                        setInputDest(newInputValue);
                        }}
                        getOptionLabel={(option) => (option.label?option.label:'')}
                        options={type}
                        style={{ width: 180 }}
                        renderInput={(params) => <TextField {...params} label="Destination" variant="outlined" />}
                    />	           
                 </div>
             </div>
             
             <div className='searchBtn flex'>
                <button className='btn btnBlock' onClick={handleSubmit}>Search Packages</button>
             </div>

	  </div>
       </div>   
   )
}

export default SearchPkg
