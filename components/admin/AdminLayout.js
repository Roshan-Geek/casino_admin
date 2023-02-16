// Fonts include
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
import { useEffect, useState } from "react";

// Components
import Header from "@/components/admin/Header";
import SideBar from "@/components/admin/SideBar";
import Head from "next/head";

const AdminLayout = ({ children }) => {
    const [path, setPath] = useState();

    useEffect(() => {
        const path = window.location.pathname;
        var cssName = path === "/admin" ? "../../assets/css/fontawesome-min.css" : "";

        setPath(cssName);
    }, []);

    return (
        <>
            <style jsx global>{`
                :root {
                    --body_font: ${poppins.style.fontFamily};
                }
            `}</style>

            <Head>
                <link rel="stylesheets" href={path} />
            </Head>

            <Header />
            <SideBar />

            <main className="main_container">
                <div className="main_content_box">{children}</div>
            </main>
        </>
    );
};

export default AdminLayout;
