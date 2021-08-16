import React from 'react'
import { FormControl , FormControlLabel , Checkbox as MuiCheckbox } from '@material-ui/core'
import { color } from '@material-ui/system'


export default function Checkbox(props) {
    const {name , label , value , onChange , color} = props

    const convertToDefEventPara = (name , value) =>({
        target : {
            name ,value
        }
    })

    return (
        <FormControl>
                <FormControlLabel
                    control={
                        <MuiCheckbox
                        name = {name}
                        color = {color || 'primary'}
                        checked={value}
                        onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
                        />
                    }
                    label={label}
                />
        </FormControl>
    )
}