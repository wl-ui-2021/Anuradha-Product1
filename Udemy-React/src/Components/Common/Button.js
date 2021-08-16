import React from 'react'
import {Button as MuiButton , makeStyles} from '@material-ui/core'

const useStyles= makeStyles(theme =>({
    root : {
        margin : theme.spacing(0.5)
    },
    label : {
        textTransform : 'none'
    }
}))


export default function BUTTON(props) {
    const {text , color ,variant , size , onClick , ...other} = props
    const classes = useStyles()
    return (
        <MuiButton
            classes={{root : classes.root , label : classes.label}}
            color={color || "primary"}
            variant={variant || "contained"}
            size={size || "large"}
            onClick={onClick}
            {...other}
        >
            {text}
        </MuiButton>
    )
}