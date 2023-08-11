import {
  createTheme,
  PaletteColor,
  SimplePaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: PaletteColor;
  }

  interface PaletteOptions {
    black: SimplePaletteColorOptions;
  }
}

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#5865F2",
    },
    text: {
      primary: "#fff",
      secondary: "#b9bbbe",
    },
    black: {
      main: "#313342",
      dark: "#1e1f22",
      light: "#39393f",
    },
  },
});
