import { useEffect, useState } from "react";
import Link from "next/link";
import sha1 from "sha1";
import axios from "axios";
import AdminModal from "../AdminModal";
import ChangePassword from "../Modals/ChangePassword";

const Header = () => {
    const [passwordModal, setPasswordModal] = useState(false);
    const [languageModal, setLanguageModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [totalBalance, setTotalBalance] = useState();
    const [admin, setAdmin] = useState();

    const password = () => {
        setPasswordModal(true);
    };

    const langModal = () => {
        setLanguageModal(true);
    };
    const handleLogOut = () => {
        localStorage.removeItem("Admin");
    };

    useEffect(() => {
        const loggedInAdmin = JSON.parse(localStorage.getItem("Admin"));
        if (loggedInAdmin) {
            setAdmin(loggedInAdmin);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        const getUserId = JSON.parse(localStorage.getItem("Admin"));
        const currancy = JSON.parse(localStorage.getItem("currency"));

        const authKey = sha1(
            process.env.NEXT_PUBLIC_AUTH_KEY +
                `action=balance&remote_id=https://demo.urgentgames.com/_${getUserId.ID}&token=${process.env.NEXT_PUBLIC_TOKEN}&currency=${currancy.title}&casino=${process.env.NEXT_PUBLIC_CASINO}`
        );
        try {
            const getTotalBlance = async () => {
                await axios
                    .get(
                        `https://api.agere.games/casinos-admin/api?action=balance&remote_id=https://demo.urgentgames.com/_${getUserId.ID}&token=${process.env.NEXT_PUBLIC_TOKEN}&currency=${currancy.title}&casino=${process.env.NEXT_PUBLIC_CASINO}&authKey=${authKey}`
                    )
                    .then((response) => {
                        setTotalBalance(
                            Number(response?.data.balance).toLocaleString("en-US", {
                                style: "currency",
                                currency: currancy.title,
                            })
                        );
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error?.message);
                        setLoading(true);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            };
            getTotalBlance();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <div className="main_container">
                <button className="menu-toggle for_mob">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <header className="site_header">
                    <nav className="navbar_wp">
                        <ul>
                            <li>
                                <Link
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    title="Price"
                                    className="cursor_not_allow">
                                    <i className="fal fa-coins"></i>
                                    <span>
                                        {loading ? (
                                            <span
                                                className="load-more"
                                                style={{ display: loading ? "block" : "none" }}>
                                                <i className="fad fa-spinner-third  fa-spin ajax-loader" />
                                            </span>
                                        ) : (
                                            <>
                                                <span className="woocommerce-Price-currencySymbol woo_current_user_balance ">
                                                    {totalBalance}
                                                </span>
                                            </>
                                        )}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                    <i className="fas fa-headset"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            data-toggle="modal"
                                            data-target="#contact-support"
                                            className="contact-support-button">
                                            <i className="fal fa-paper-plane"></i> Contact Support
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                    <i className="fal fa-user"></i>
                                    <span>{admin?.display_name}</span>
                                </Link>
                                <ul>
                                    <li>
                                        <Link
                                            href=""
                                            onClick={password}
                                            data-toggle="modal"
                                            data-target="#main_change_password">
                                            <i className="far fa-angle-right"></i> Change Password
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            onClick={langModal}
                                            data-toggle="modal"
                                            data-target="#change-language">
                                            <i className="far fa-angle-right"></i> Change language
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            data-toggle="modal"
                                            data-target="#login-history">
                                            <i className="far fa-angle-right"></i> Login History
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/admin/login" onClick={handleLogOut}>
                                            <i className="far fa-angle-right"></i> Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

            <ChangePassword show={passwordModal} setShow={setPasswordModal} />

            <AdminModal show={languageModal} setShow={setLanguageModal}>
                <h3 className="h3-title modal_title"> Change language</h3>
            </AdminModal>
        </>
    );
};

export default Header;
