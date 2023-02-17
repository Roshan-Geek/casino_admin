import {useEffect, useState} from "react";

const Header = () => {

    const [admin, setAdmin] = useState();

    useEffect(() => {
        const loggedInAdmin = JSON.parse(localStorage.getItem('user'));
        if(loggedInAdmin) {
            setAdmin(loggedInAdmin);
        }
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem('user');
    };

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
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        title="Price"
                                        className="cursor_not_allow">
                                        <i className="fal fa-coins"></i>
                                        <span>
                                        <span className="woocommerce-Price-currencySymbol symbol-only">
                                            $
                                        </span>
                                        <span className="woocommerce-Price-currencySymbol woo_current_user_balance ">
                                            897.00
                                        </span>
                                    </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        <i className="fas fa-headset"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => e.preventDefault()}
                                                data-toggle="modal"
                                                data-target="#contact-support"
                                                className="contact-support-button">
                                                <i className="fal fa-paper-plane"></i> Contact Support
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        <i className="fal fa-user"></i>
                                        <span>{admin?.display_name}</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => e.preventDefault()}
                                                data-toggle="modal"
                                                data-target="#main_change_password">
                                                <i className="far fa-angle-right"></i> Change Password
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => e.preventDefault()}
                                                data-toggle="modal"
                                                data-target="#change-language">
                                                <i className="far fa-angle-right"></i> Change language
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => e.preventDefault()}
                                                data-toggle="modal"
                                                data-target="#login-history">
                                                <i className="far fa-angle-right"></i> Login History
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/login"
                                                onClick={handleLogOut}
                                            >
                                                <i className="far fa-angle-right"></i> Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
        </>
    );
};

export default Header;
