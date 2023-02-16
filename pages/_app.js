import "@/assets/scss/index.scss";
import "@/assets/css/fontawesome-min.css";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

export default App;
