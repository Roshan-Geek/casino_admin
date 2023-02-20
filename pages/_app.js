// Css
import "@/assets/scss/index.scss";
import "@/assets/css/fontawesome-min.css";

// Components

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

export default App;
