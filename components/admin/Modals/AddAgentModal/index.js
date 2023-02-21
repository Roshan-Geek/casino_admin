import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AdminModal from "../../AdminModal";
import CasinoCommission from "./CasinoCommission";
import DocumentContainer from "./DocumentContainer";
import EmailContainer from "./EmailContainer";
import FullnameContainer from "./FullnameContainer";
import PasswordContainer from "./PasswordContainer";
import PermissionContainer from "./PermissionContainer";
import PhoneContainer from "./PhoneContainer";
import PokerCommission from "./PokerCommission";
import SettlementContainer from "./SettlementContainer";
import SportCommission from "./SportCommision";
import UsernameContainer from "./UsernameContainer";

const AddAgent = ({ show, setShow }) => {
    const methods = useForm();

    const [selectedTab, setSelectedTab] = useState("entry");
    const [error, setError] = useState();

    const handleClose = () => {
        setShow(false);
    };

    const handleTabChange = (name) => {
        if (name === "entry") {
            setSelectedTab("entry");
        } else if (name === "personal-information") {
            setSelectedTab("personal-information");
        } else if (name === "permission") {
            setSelectedTab("permission");
        } else {
            setSelectedTab("commissions");
        }
    };

    const checkNext = (event, name) => {
        event.preventDefault();
        if (name === "entry") {
            if (!methods.getValues("username")) {
                setError("Username is required");
                return;
            }
            if (!methods.getValues("password")) {
                setError("Password is required");
                return;
            }
            setError("");
            setSelectedTab("personal-information");
        } else if (selectedTab == "personal-information") {
            if (!methods.getValues("firstname")) {
                setError("First name is required");
                return;
            }
            if (!methods.getValues("lastname")) {
                setError("Last name is required");
                return;
            }
            if (!methods.getValues("email")) {
                setError("Email is required");
                return;
            }
            if (!methods.getValues("phone")) {
                setError("Phone is required");
                return;
            }
            if (!methods.getValues("username")) {
                setError("Username is required");
                return;
            }
            if (!methods.getValues("password")) {
                setError("Password is required");
                return;
            }
            setError("");
            setSelectedTab("permission");
        } else if (selectedTab == "permission") {
            if (!methods.getValues("permission")) {
                setError("Permission is required");
                return;
            }
            setError("");
            setSelectedTab("commission");
        }
    };

    const checkPrevious = (event, name) => {
        event.preventDefault();
        if (name === "personal-information") {
            setSelectedTab("entry");
        } else if (name === "permission") {
            setSelectedTab("personal-information");
        } else if (name === "commission") {
            setSelectedTab("permission");
        }
    };

    const handleFormData = (formdata) => {
        console.log(formdata);
    };

    return (
        <AdminModal show={show} closeModal={handleClose} size="lg">
            <h3 className="h3-title modal_title">Add Agent</h3>
            <div className="modal_tablist">
                <ul>
                    <li
                        data-tab="entry"
                        className={selectedTab === "entry" && "active_modal_tab"}
                        onClick={() => handleTabChange("entry")}>
                        Entry
                    </li>
                    <li
                        data-tab="personal-information"
                        className={selectedTab === "personal-information" && "active_modal_tab"}
                        onClick={() => handleTabChange("personal-information")}>
                        Personal information
                    </li>
                    <li
                        data-tab="permission"
                        className={selectedTab === "permission" && "active_modal_tab"}
                        onClick={() => handleTabChange("permission")}>
                        Permission
                    </li>
                    <li
                        data-tab="commissions"
                        className={selectedTab === "commissions" && "active_modal_tab"}
                        onClick={() => handleTabChange("commissions")}>
                        Commissions
                    </li>
                </ul>
            </div>

            <FormProvider {...methods}>
                <form
                    method="post"
                    className="vr_add_user_from"
                    onSubmit={methods.handleSubmit(handleFormData)}>
                    <div
                        className="modal-from-section entry-sec"
                        style={{ display: selectedTab === "entry" ? "block" : "none" }}>
                        <div className="modal_form">
                            <div className="form_input_wp">
                                <UsernameContainer methods={methods} />
                            </div>
                            <div className="form_input_wp">
                                <PasswordContainer methods={methods} />
                            </div>
                        </div>
                        <p className="error-msg" style={{ display: error ? "block" : "none" }}>
                            {error}
                        </p>
                        <div className="modal_footer">
                            <button className="sec_btn" onClick={(event) => checkNext(event, "entry")}>
                                Next
                            </button>
                        </div>
                    </div>
                    <div
                        className="modal-from-section personal-information-sec"
                        style={{ display: selectedTab === "personal-information" ? "block" : "none" }}>
                        <div className="modal_form">
                            <div className="form_input_wp">
                                <FullnameContainer methods={methods} />
                            </div>
                            <div className="form_input_wp">
                                <DocumentContainer methods={methods} />
                            </div>
                            <div className="form_input_wp">
                                <EmailContainer methods={methods} />
                            </div>
                            <div className="form_input_wp">
                                <PhoneContainer methods={methods} />
                            </div>
                        </div>
                        <p className="error-msg" style={{ display: error ? "block" : "none" }}>
                            {error}
                        </p>
                        <div className="modal_footer">
                            <button
                                className="sec_btn"
                                onClick={(event) => checkPrevious(event, "personal-information")}>
                                Previous
                            </button>
                            <button
                                className="sec_btn"
                                onClick={(event) => checkNext(event, "personal-information")}>
                                Next
                            </button>
                        </div>
                    </div>
                    <div
                        className="modal-from-section permission-sec"
                        style={{ display: selectedTab === "permission" ? "block" : "none" }}>
                        <div className="form_checkbox-sec-wp">
                            <PermissionContainer methods={methods} />
                        </div>
                        <p className="error-msg" style={{ display: error ? "block" : "none" }}>
                            {error}
                        </p>
                        <div className="modal_footer">
                            <button
                                className="sec_btn"
                                onClick={(event) => checkPrevious(event, "permission")}>
                                Previous
                            </button>
                            <button className="sec_btn" onClick={(event) => checkNext(event, "permission")}>
                                Next
                            </button>
                        </div>
                    </div>
                    <div
                        className="modal-from-section commissions-sec"
                        style={{ display: selectedTab === "commissions" ? "block" : "none" }}>
                        <div className="commissions_modal_form">
                            <div className="commission-type-div">
                                <SettlementContainer methods={methods} />
                            </div>
                        </div>
                        <div className="form_checkbox-sec-wp">
                            <div className="form_checkbox-sec form_input-sec">
                                <div className="form_input-sec_list all-commission-main-box">
                                    <div className="form_checkbox-header">
                                        <SportCommission methods={methods} />
                                    </div>
                                </div>
                                <div className="form_input-sec_list all-commission-main-box">
                                    <div className="form_checkbox-header">
                                        <CasinoCommission methods={methods} />
                                    </div>
                                </div>
                                <div className="form_input-sec_list all-commission-main-box">
                                    <div className="form_checkbox-header">
                                        <PokerCommission methods={methods} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="error-msg" style={{ display: error ? "block" : "none" }}>
                            {error}
                        </p>
                        <div className="modal_footer">
                            <button
                                className="sec_btn"
                                onClick={(event) => checkPrevious(event, "commission")}>
                                Previous
                            </button>
                            <button type="submit" className="sec_btn">
                                Submit
                            </button>
                            <span className="load-more">
                                <i className="fad fa-spinner-third  fa-spin ajax-loader"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </AdminModal>
    );
};

export default AddAgent;
