import { useState } from 'react'
import { LOG_FORM_OBJ, LOG_TYPE } from './hooks/hookUseConstant.js'
import { Button, OutlinedInput } from '@mui/material';
import DropdownMenu from './component/dropdown.jsx';
import useConsole from './hooks/useConsole.js'
import './App.css'

function App() {
  
  const [logFormData, setLogFormData] = useState(LOG_FORM_OBJ);

  const [updatedFormData, recordLog] = useConsole();

  const setScope = (event) =>{

    setLogFormData({
      ...logFormData,
      scope: event.target.value
    })
  };

  const setMessage = (event)=>{

    setLogFormData({
      ...logFormData,
      message : event.target.value
    })
  };

  return (
    <>
      <div className = "w-screen h-screen flex justify-center items-center">
        <div className = "grid grid-rows-2 grid-flow-col gap-10 w-3/4 h-auto">
          <OutlinedInput
            fullWidth 
            placeholder = "SCOPE"
            value = {logFormData.scope}
            onChange = {setScope}/>

          <OutlinedInput
            fullWidth 
            placeholder = "MESSAGE"
            value = {logFormData.message}
            onChange = {setMessage}/>

          <DropdownMenu
            formData = {logFormData}
            setFormData = {setLogFormData}
            itemList = {Object.values(LOG_TYPE)}
          />

          <Button
            fullWidth
            variant="contained" 
            onClick={()=>{recordLog(logFormData)}}
          >
            Submit
          </Button>

        </div>
      </div>
    </>
  )
}

export default App
