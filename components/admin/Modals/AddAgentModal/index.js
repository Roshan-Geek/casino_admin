import React from "react";
import AdminModal from "../../AdminModal";
import UsernameContainer from "./UsernameContainer";

const AddAgent = ({ methods, show, setShow }) => {
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
                    <li data-tab="personal-information">Personal information </li>
                    <li data-tab="permission">Permission </li>
                    <li data-tab="commissions">Commissions </li>
                </ul>
            </div>

            <form className="vr_add_user_from">
                <div className="modal-from-section entry-sec">
                    <div className="modal_form">
                        <div className="form_input_wp">
                            <UsernameContainer methods={methods} />
                        </div>
                        <div className="form_input_wp">
                            <i className="fal fa-eye"></i>
                            <input
                                name="password"
                                type="password"
                                className="form_input"
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
                                    className="vr_ck_everyone agent_game_permission"
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
                                    className="vr_ck_everyone agent_game_permission"
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
                                    className="vr_ck_everyone agent_game_permission"
                                />
                                <div className="form_checkbox-header">
                                    <span>Poker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-from-section commissions-sec">
                    <div className="commissions_modal_form">
                        <div className="commission-type-div">
                            <label htmlFor="settlement_type_select">Settle Automatically</label>
                            <div className="form-element text-center">
                                <select
                                    name="settlement_type"
                                    id="settlement_type_select"
                                    className="form_input">
                                    <option>Select Settlement Type</option>
                                    <option value="month">Monthly</option>
                                    <option value="week">Weekly</option>
                                </select>
                                <i className="far fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="form_checkbox-sec-wp">
                            <div className="form_checkbox-sec form_input-sec">
                                <div className="form_input-sec_list all-commission-main-box">
                                    <div className="form_checkbox-header">
                                        <span>Sports</span>
                                        <div className="form-element">
                                            <input
                                                type="number"
                                                name="commission[sports]"
                                                className="form_input"
                                                step=".01"
                                                placeholder=""
                                            />
                                            <i className="far fa-percent"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_input-sec_list all-commission-main-box">
                                    <div className="form_checkbox-header">
                                        <span>Casino</span>
                                        <div className="form-element">
                                            <input
                                                type="number"
                                                name="commission[casino]"
                                                className="form_input"
                                                step=".01"
                                                placeholder=""
                                            />
                                            <i className="far fa-percent"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_input-sec_list all-commission-main-box">
                                    <div className="form_checkbox-header">
                                        <span>Poker</span>
                                        <div className="form-element">
                                            <input
                                                type="number"
                                                name="commission[poker]"
                                                className="form_input"
                                                step=".01"
                                                placeholder=""
                                            />
                                            <i className="far fa-percent"></i>
                                        </div>
                                    </div>
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
                <p className="error-msg vr-commission-settlement-type-err">Please select settlement type.</p>
                <p className="error-msg vr-permission-err">Please add user game permission.</p>
                <p className="success-msg">your account has been created successfully.</p>
            </form>
        </AdminModal>
    );
};

export default AddAgent;
