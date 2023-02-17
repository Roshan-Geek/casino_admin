// Fonts include
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
