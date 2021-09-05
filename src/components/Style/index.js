import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
         spacing: 4,
         palette: {
           primary: {
             main: '#37add4',
           },

           background: {
             default: '#ECECEC',
             paper: 'white',
           },
         },
         borderRadius: '8px',
         textShadow: '0px 5px 4px rgba(0, 0, 0, 0.50)',
         boxShadow:
           'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
         overrides: {
           MuiInputBase: {
             root: {
               fontFamily: 'Montserrat !important',
               
               fontSize: 20,
               '@media (max-width: 760px)': {
                 fontSize: 14,
               },
             },
           },
           MuiFormLabel: {
             root: {
               fontFamily: 'Montserrat !important',
               fontSize: 18,
             },
           },
           MuiOutlinedInput: {
             root: {
               borderRadius: 12,
             },
           },
           MuiButtonGroup: {
             groupedContainedHorizontal: {
               borderRight: 'none  !important',
             },
           },
           MuiToolbar: {
             root: {
               backgroundColor: 'white',
               color: 'black',
             },
           },
           MuiDialog: {
             paper: { margin: 0 },
             paperWidthLg: {
               boxShadow: 'none',
               background: 'transparent',
             },
           },
           MuiBackdrop: {
             root: {
               backdropFilter: 'blur(8px)',
             },
           },
         },
       });
