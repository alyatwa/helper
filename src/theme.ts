import { createMuiTheme } from '@material-ui/core/styles';

const newtheme = createMuiTheme({
    typography: {
      fontFamily: 'adelle',
      h1: {
      fontSize: '30px',
      marginBottom: 0,
      fontweight: 400,
      overFlow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
      },
      h2: {
      fontSize: '18px',
      marginBottom: 0,
      fontweight: 400,
      overFlow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
      },
      h6: {
      fontSize: '18px',
      marginBottom: 0,
      fontWeight: 400,
      overFlow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      },
      h3: {
        fontFamily: "Times New Roman"
      },
      h4: {
        fontFamily: 'adelle',
        fontSize: '24px',
        fontWeight: 600,
        marginBottom: '15px',
        fontFeatureSettings:'tnum'
      }
    },
    palette: {
      background: {
        default: "#f7f7fc"
      }
    },
    overrides: {
      MuiTypography:{
        body1: {
          textDecoration: 'none'
        }
      },
        MuiCssBaseline: {
          '@global': {
            '*::-webkit-scrollbar': {
              width: '7px',
              backgroundColor: 'transparent'
            },
            '*::-webkit-scrollbar-thumb':{
              backgroundColor: '#cccccc',
              borderRadius: '3px',
              width: '6px',
            }

          }
      }
    }
  
});
export default newtheme;
