
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const IOSSwitch = styled(Switch)(({ theme }, isDarkMode) => ({
  width: 103,
  height: 50,
  padding: 7,
  borderRadius: 50,

    '& .MuiSwitch-switchBase': {
        width: 40, 
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(50px)',
            color: '#111111',
            '& + .MuiSwitch-track': {
                backgroundColor: '#D9D9D9',
                opacity: 1,
                border: !isDarkMode ? '1.5px solid black' : 'none',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: `red`,//${theme.palette?.mode === 'light' ? theme.palette?.grey[100] : theme.palette.grey[600]}`,
      },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette?.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        color: '#111111',
        boxSizing: 'border-box',
        position: 'relative',
        top: 8,
        marginLeft: 8,
        width: 30,
        height: 30,
    },
    '& .MuiSwitch-track': {
      // Задний фон до checked
        border: !isDarkMode ? '1.5px solid black' : 'none',
        borderRadius: 50,
        backgroundColor: '#D9D9D9',//theme.palette?.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions?.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export default IOSSwitch;
