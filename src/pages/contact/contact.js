import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Template} from "../template";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import MailBox from '../../assets/mailbox.png'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {services} from "../../SERVICES";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        padding: theme.spacing(10),
    },
    formControl: {
        marginTop: theme.spacing(4),
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(6),
    },

    imgContainer: {
        display: "flex",
        justifyContent: 'flex-end',
    }

}));


export const Contact = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        name: '',
        email: '',
        text: '',
        service: 'General',
    })
    const handleChange = (field) => (event) => {
        setState(({...state, [field]: event.target.value}))
    }

    function getForm() {
        return <Box className={classes.formContainer}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="NameInput">Name</InputLabel>
                <Input onInput={handleChange('name')} id="NameInput"/>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="emailInput">Email</InputLabel>
                <Input onChange={handleChange('email')} id="emailInput"/>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="serviceInput">Department</InputLabel>
                <Select
                    labelId="seviceInputLabel"
                    id="seviceInput"
                    value={state.service}
                    onChange={handleChange('service')}
                >
                    <MenuItem value={'General'}>General</MenuItem>
                    {services.map(service =>
                        <MenuItem value={service.title}>{service.title}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField onChange={handleChange('message')} id="messageInput"
                           placeholder="How can we help?" variant='outlined'
                           multiline={true}/>
            </FormControl>
        </Box>;
    }

    return (<>
            <Template headerTitle={'Contact Us'} innerTitle={'CONTACT US'}>
                <Grid container spacing={1} className={classes.container}>
                    <Grid item lg={8} md={7} sm={12} xs={12}>
                        <Box>
                            {getForm()}
                            <Box className={classes.buttonContainer}>
                                <Button variant={"contained"} style={{maxWidth: "max-content"}}>Send</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Hidden smDown>
                    <Grid item lg={4} md={5} className={classes.imgContainer}>
                        <img src={MailBox} alt="mailbox" style={{maxHeight: 350, aspectRatio: '1/1'}}/>
                    </Grid>
                    </Hidden>
                </Grid>
            </Template>
            }
        </>
    )
};
