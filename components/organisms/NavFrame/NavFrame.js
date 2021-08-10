import React from "react"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Toolbar from "@material-ui/core/Toolbar"
import TopBar from "../../molecules/TopBar/TopBar"
import SocialMediaRow from "../../molecules/SocialMediaRow/SocialMediaRow"
import Watermark from "../../molecules/Watermark/Watermark"
import { alpha, makeStyles } from "@material-ui/core/styles"
import Link from "next/link"
import { useRouter } from "next/router"
import ThemeToggle from "../../molecules/ThemeToggle/ThemeToggle"
import { PSEUDOCOIN_ADDRESS } from "../../../core/environments"
import { Box } from "@material-ui/core"

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    position: "relative",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  listHeader: {
    padding: ".5rem",
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
    color: "#836AFF",
    marginBottom: "0px",
  },
  listItem: {
    // borderRadius: ".5rem",
    cursor: "pointer",
    fontFamily: theme.typography.regular,
  },
  listItemParent: {
    // paddingLeft: "1.5em",
    // paddingRight: "1.5em",
  },
  socialMediaRowParent: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
    position: "absolute",
    bottom: 10,
    width: "100%",
    display: "grid",
    justifyContent: "center",
  },
  navItemContainer: {
    padding: ".5rem",
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
}))

function ListItemObject(title, path, isDisabled = false, newTab = false) {
  return {
    title: title,
    path: path,
    isDisabled: isDisabled,
    newTab: newTab,
  }
}

export default function NavFrame(props) {
  const router = useRouter()

  // NOTE: add new pages here
  const pages = [
    ListItemObject("Home", "/"),
    ListItemObject("Blog Post", "/blog-post"), // an example: please change this
  ]

  const NavListItem = ({ navItem, key }) => {
    const classes = useStyles()
    const isSelected = navItem.path == router.route

    const navigate = (path, newTab) => {
      newTab ? window.open(path, "_blank") : router.push(path)
    }

    return (
      <Box className={classes.navItemContainer}>
        {navItem.isDisabled ? (
          <a
            className={classes.listItem}
            onClick={() => {
              navigate(navItem.path, navItem.newTab)
            }}
          >
            {navItem.title}
          </a>
        ) : (
          <a
            className={classes.listItem}
            onClick={() => {
              navigate(navItem.path, navItem.newTab)
            }}
          >
            {navItem.title}
          </a>
        )}
      </Box>
    )
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar address={props.address} />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar className={classes.toolbar} />
        <div className={classes.drawerContainer}>
          <List>
            <br />
            <h4 className={classes.listHeader}>Pages</h4>
            {pages.map((item, key) => {
              // console.log("NavListItem" + key);
              return (
                <div key={key} className={classes.listItemParent}>
                  <NavListItem
                    navItem={item}
                    id={item.path + "NavListItem" + key}
                  />
                </div>
              )
            })}
          </List>
          <div className={classes.socialMediaRowParent}>
            {" "}
            <ThemeToggle />
            <br />
            <SocialMediaRow />
            <br />
            <Watermark />
            <br />
          </div>
        </div>
      </Drawer>
      <Divider />
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}
