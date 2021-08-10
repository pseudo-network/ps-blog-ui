import "../styles/globals.css"
import LightTheme from "../themes/light-theme"
import DarkTheme from "../themes/dark-theme"
import React from "react"
import { Box } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { ProvideWallet } from "../contexts/walletContext"
import {
  AppThemeContext,
  ProvideAppTheme,
  useAppTheme,
} from "../contexts/appThemeContext"

function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <ProvideAppTheme>
      <AppThemeContext.Consumer>
        {(theme) => (
          <ThemeProvider theme={theme.darkMode ? DarkTheme : LightTheme}>
            <ProvideWallet>
              <Box style={{ margin: "33px" }}>
                <Component {...pageProps} />
              </Box>
            </ProvideWallet>
          </ThemeProvider>
        )}
      </AppThemeContext.Consumer>
    </ProvideAppTheme>
  )
}

export default MyApp
