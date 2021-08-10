/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import NavFrame from "../components/organisms/NavFrame/NavFrame"
import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"
import { alpha, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: "1.25em",
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavFrame page={"Home"}>
        <h1>Header</h1>
        <h2>Subheader</h2>
        <hr />
        <Typography paragraph className={classes.section}>
          This is the body of the blog post
        </Typography>
      </NavFrame>
    </>
  )
}
