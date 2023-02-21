import AdminModal from "@/components/admin/AdminModal";
import { FormProvider } from "react-hook-form";
import { useState } from "react";

const AddPlayer = ({ methods, show, setShow }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <AdminModal show={show} closeModal={handleClose} size="lg">
            <h3 className="h3-title modal_title">Add player</h3>
            <div className="modal_tablist">
                <ul>
                    <li data-tab="entry" className="active_modal_tab">
                        Entry
                    </li>
                    <li data-tab="personal-information" className="">
                        Personal information
                    </li>
                    <li data-tab="permission" className="">
                        Permission
                    </li>
                </ul>
            </div>

            <FormProvider {...methods}>
                <form className="vr_add_user_from">
                    <div className="modal-from-section entry-sec">
                        <div className="modal_form">
                            <div className="form_input_wp">
                                <i className="fal fa-user"></i>
                                <input
                                    name="username"
                                    type="text"
                                    className="form_input"
                                    autoComplete="off"
                                    placeholder="UserName"
                                />
                            </div>
                            <div className="form_input_wp">
                                <i className="fal fa-eye"></i>
                                <input
                                    name="password"
                                    type="password"
                                    className="form_input"
                                    autoComplete="off"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-from-section personal-information-sec">
                        <div className="modal_form">
                            <div className="form_input_wp">
                                <i className="fal fa-user"></i>
                                <input
                                    name="fullname"
                                    type="text"
                                    className="form_input"
                                    placeholder="Fullname"
                                />
                            </div>
                            <div className="form_input_wp">
                                <i className="fal fa-id-card"></i>
                                <input
                                    name="document"
                                    type="text"
                                    className="form_input"
                                    placeholder="Document"
                                />
                            </div>
                            <div className="form_input_wp">
                                <i className="fal fa-envelope"></i>
                                <input
                                    name="user_email"
                                    type="email"
                                    className="form_input"
                                    placeholder="E-mail"
                                />
                            </div>
                            <div className="form_input_wp">
                                <i className="fal fa-phone-alt"></i>
                                <input name="phone" type="text" className="form_input" placeholder="phone" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-from-section permission-sec">
                        <div className="form_checkbox-sec-wp">
                            <div className="form_checkbox-sec">
                                <div className="form_checkbox">
                                    <input
                                        type="checkbox"
                                        name="permission[]"
                                        value="sports"
                                        className="vr_ck_everyone"
                                    />
                                    <div className="form_checkbox-header">
                                        <span>Sports</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form_checkbox-sec">
                                <div className="form_checkbox">
                                    <input
                                        type="checkbox"
                                        name="permission[]"
                                        value="casino"
                                        className="vr_ck_everyone"
                                    />
                                    <div className="form_checkbox-header">
                                        <span>Casino</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form_checkbox-sec">
                                <div className="form_checkbox">
                                    <input
                                        type="checkbox"
                                        name="permission[]"
                                        value="poker"
                                        className="vr_ck_everyone"
                                    />
                                    <div className="form_checkbox-header">
                                        <span>Poker</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_footer">
                        <button type="submit" className="sec_btn">
                            Submit
                        </button>
                        <span className="load-more">
                            <i className="fad fa-spinner-third  fa-spin ajax-loader"></i>
                        </span>
                    </div>
                    <p className="error-msg vr-uname-err">Please enter valid username.</p>
                    <p className="error-msg vr-pwd-err">Please enter valid password.</p>
                    <p className="error-msg vr-email-err">Please enter valid email.</p>
                    <p className="error-msg vr-permission-err">Please add user game permission.</p>
                    <p className="success-msg">your account has been created successfully.</p>
                </form>
            </FormProvider>
        </AdminModal>
    );
};

export default AddPlayer;
