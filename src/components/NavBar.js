import React from 'react'
import logo from '../logo.jpeg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import CreateButton from './Button'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        '@media (max-width:780px)': { 
            flexDirection: "column"
            }
    },
    logo: {
        width: "15%", 
        '@media (max-width:780px)': { 
            display: "none"
            }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        '@media (max-width:780px)': { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <Typography variant="h6" className={classes.menuItem}>
                    HOME
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    SERVICES
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    ABOUT
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    PROJECTS 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    CONTACT
                </Typography>
                <CreateButton txt="Fancy Button"/>
            </Toolbar>
    )
}

export default NavBar