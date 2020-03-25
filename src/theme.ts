import { createMuiTheme } from '@material-ui/core/styles';

const newtheme = createMuiTheme({
    typography: {
      fontFamily: 'adelle',
      h2: {
        color: '#7171a6',
      fontSize: '18px',
      marginBottom: 0,
      fontweight: 400,
      overFlow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
      },
      h6: {
        color: '#7171a6',
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
        color: '#6078ff',
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
      }
    }
  
});
export default newtheme;
