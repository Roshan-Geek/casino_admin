// Fonts include
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Css
import "@/assets/scss/index.scss";
import "@/assets/css/fontawesome-min.css";

// Components
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <style jsx global>{`
                :root {
                    --body_font: ${poppins.style.fontFamily};
                }
            `}</style>
            <Header />
            <SideBar />

            <main className="main_container">
                <div className="main_content_box">
                    <Component {...pageProps} />
                </div>
            </main>
        </>
    );
};

export default App;
