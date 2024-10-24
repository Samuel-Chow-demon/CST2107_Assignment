import React from "react";
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const {useState} = React;


const DropdownMenu = ({formData, setFormData, itemList}) =>{

    const [value, setValue] = useState("");

    const selectOption = (event)=>{
        setValue(event.target.value);

        setFormData({
            ...formData,
            type : event.target.value
        })
    }

    return (
        <FormControl fullWidth>
            <InputLabel>Log Type</InputLabel>
            <Select 
                value={value}
                label="Log Type"
                onChange={selectOption}
            >
            {
                itemList.map((item, index)=>{
                    
                    return (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>);
                })
            }
            </Select>

        </FormControl>

    );
}

export default DropdownMenu;