import { createTheme } from '@mui/material/styles'; // import the createTheme from MUI
const styles = require('.zesty/styleVariables') || {}; // assigning the styleVariables.json to the "styles" variable

const headerFontSize = styles['font-size-base'];
export default function ZestyStyleVariables() {
  const zestySettingsTheme = createTheme({
    palette: {
      secondary: {
        //Accessing the @brand-primary color
        main: `${styles['brand-secondary'] || `#fff`}`,
      },
    },

    typography: {
      // Header styles
      fontSize: headerFontSize || 12,
    },
  });

  return zestySettingsTheme;
}
