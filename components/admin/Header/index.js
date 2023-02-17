import Image from "next/image";
import { useState, useEffect } from "react";
import AdminModal from "../AdminModal";

const Header = () => {
    const [passwordModal, setPasswordModal] = useState(false);
    const [languageModal, setLanguageModal] = useState(false);

    const password = () => {
        setPasswordModal(true);
    };

    const langModal = () => {
        setLanguageModal(true);
    };


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
                                <a href="#" onClick={(e) => e.preventDefault()} title="apidev">
                                    <i className="fal fa-user"></i>
                                    <span>apidev</span>
                                </a>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={password}
                                            data-toggle="modal"
                                            data-target="#main_change_password">
                                            <i className="far fa-angle-right"></i> Change Password
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={langModal}
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
                                        <a href="/admin/login" onClick={handleLogOut}>
                                            <i className="far fa-angle-right"></i> Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

            <AdminModal show={passwordModal} setShow={setPasswordModal}>
                <h3 className="h3-title modal_title">Change Password</h3>
                <form className="modal_form user_change_pwd_form">
                    <div className="form_input_wp">
                        <i className="fal fa-eye"></i>
                        <input
                            name="new_assword"
                            type="password"
                            className="form_input"
                            placeholder="New Password"
                        />
                    </div>
                    <div className="form_input_wp">
                        <i className="fal fa-eye"></i>
                        <input
                            name="confirm_password"
                            type="password"
                            className="form_input"
                            placeholder="confirm Password"
                        />
                    </div>
                    <div className="modal_footer">
                        <button type="submit" className="sec_btn">
                            Submit
                        </button>
                        <input type="hidden" value="103" name="user_id" />
                    </div>
                    <p className="error-msg vr-newpwd-err">Please enter password.</p>
                    <p className="error-msg vr-conpwd-err">Please enter confirm password.</p>
                    <p className="success-msg pwd-success-msg">password is successfully update.</p>
                </form>
            </AdminModal>

            <AdminModal show={languageModal} setShow={setLanguageModal}>
                <h3 className="h3-title modal_title"> Change language</h3>
            </AdminModal>
        </>
    );
};

export default Header;
