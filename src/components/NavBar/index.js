import * as React from "react";
import { Toolbar, Container } from "@mui/material/";
import { Link } from "react-router-dom";
import "./style.css"


function NavBar(props) {
    const { sections } = props;

    return (
        <Container maxWidth="sm">
            <Toolbar
                className="navbar"
                component="nav"
                variant="dense"
                sx={{ justifyContent: "space-between", overflowX: "auto" }}
            >
                {sections.map((section) => (
                    <Link className="navbar-link" to={section.url}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </Container>
    );
}

export default NavBar;
