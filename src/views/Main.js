import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

const styles = {
    links: {
        fontSize: "25px",
        color: "darkslategray",
    },
    header: {
        fontSize: "50px",
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "1000px",
        background: "linear-gradient(#b9f2ff, #61e2ff)",
    },
    contentbox: {
        display: "flex",
        justifyContent: "center",
        width: "fit-content",
        margin: "0px auto",
        paddingTop: "100px",
        paddingBottom: "50px"
    },
    images: {
        height: "300px",
        width: "500px",
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(#a8c3bc, #7da59b)",
        padding: "100px",
        paddingTop: "50px"
    },
    image: {
        height: "600px",
        width: "auto",
        marginTop: "53px"
    },
    imageOU: {
        height: "300px",
        marginTop: "203px",
        background: "none",
        borderRadius: "300px",
        width: "400px",
    },
    imageCG: {
        marginTop: "203px",
        height: "300px",
        marginLeft: "20px",
        marginRight: "20px"
    }
};

const Main = () => {
    return (
    <div>
        <body>
        <div class="imgtransition">
            <img style={styles.imageOU} src="images/ou1.png" alt="OU Logo" />
            <img style={styles.image} src="images/Well dressed.jpeg" alt="Profile" />
            <img style={styles.imageCG} src="images/cg.png" alt="CG Logo" />
        </div>
        <div class="parchment">
            <div style={styles.contentbox} id="about">
            <h1 style={{fontSize: "50px"}}>
                Well howdy there! My name is Chase Smith. Although I have spent
                most of my life as a blue collar worker through my time in the
                U.S. Coast Guard and civilian life, I finally found my calling in
                2020 into Software Engineering and Web Development.{" "}
            </h1>
            <hr/>
            </div>
        </div>
        </body>
        <div id="projects"><h1 style={{fontSize: "60px", marginBottom: "50px"}}>Current Projects:</h1>
            <h1 class="johndeere" style={{height: "100px", width: "600px"}}><Link style={{color: "darkslategray", textDecoration: "none"}}to="/BackyardBeer">BackyardBeer</Link></h1>
            
            <h1 class="johndeere" style={{height: "100px", width: "600px"}}><Link style={{color: "#841617", textDecoration: "none"}}to="/NCAAF">NCAAF Ultimate</Link></h1>
            
            <h1 class="johndeere" style={{height: "100px", width: "600px"}}><Link style={{color: "black", textDecoration: "none"}}to="/AEG">Alpha Elite Gaming</Link></h1>
            
            <h1 class="johndeere" style={{height: "100px", width: "600px"}}><Link style={{color: "goldenrod", textDecoration: "none"}} to="/SmithSite">SmithSite</Link></h1>
        </div>
        <footer style={styles.footer}>
        <div id="contact">
            <h1>If you have any questions or would like to talk through how you would like your website built, please send an email to me at <span style={{color: "antiquewhite"}}>chaseasmith95@gmail.com</span> and I will get back to you as soon as possible!</h1>
        </div>
        </footer>
    </div>
    );
};

export default Main;
