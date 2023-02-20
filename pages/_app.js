// Css
import "@/assets/scss/index.scss";
import "@/assets/css/fontawesome-min.css";
import React from "react";

// Components

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

export default App;
