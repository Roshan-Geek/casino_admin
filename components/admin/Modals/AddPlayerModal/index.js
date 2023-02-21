import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AdminModal from "@/components/admin/AdminModal";
import PlayerUsernameContainer from "./PlayerUsernameContainer";
import PasswordContainer from "./PasswordContainer";
import FullNameContainer from "./FullnameContainer";
import DocumentContainer from "./DocumentContainer";
import EmailContainer from "./EmailContainer";
import PhoneContainer from "./PhoneContainer";
import PermissionContainer from "./PermissionContainer";

const AddPlayer = ({ show, setShow }) => {
    const methods = useForm();

    const [selectedTab, setSelectedTab] = useState("entry");
    const [errorMessage, setErrorMessage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleTabOnClick = (e, name) => {
        if (name === "entry") {
            setSelectedTab("entry");
        } else if (name === "personalInfo") {
            setSelectedTab("personalInfo");
        } else if (name === "permissionTab") {
            setSelectedTab("permissionTab");
        }
    };

    const handleNext = (e, name) => {
        e.preventDefault();
        if (name === "entry") {
            if (!methods.getValues("username")) {
                setErrorMessage("Please enter valid username.");
                return;
            }
            if (!methods.getValues("password")) {
                setErrorMessage("Please enter valid password.");
                return;
            } else {
                setSelectedTab("personalInfo");
            }
            setErrorMessage("");
        } else if (name === "personalInfo") {
            if (!methods.getValues("fullname")) {
                setErrorMessage("Please enter valid name.");
                return;
            }
            if (!methods.getValues("user_email")) {
                setErrorMessage("Please enter valid Email.");
            } else {
                setErrorMessage("");
                setSelectedTab("permissionTab");
            }
        }
    };

    const handlePrevious = (e, name) => {
        e.preventDefault();
        if (name === "entry") {
            setSelectedTab("entry");
        }
        if (name === "personalInfo") setSelectedTab("personalInfo");
    };

    const handleSubmitdata = (formdata) => {
        setShow(false);
    };

    return (
        <AdminModal show={show} closeModal={handleClose} size="lg">
            <h3 className="h3-title modal_title">Add player</h3>
            <div className="modal_tablist">
                <ul>
                    <li
                        data-tab="entry"
                        className={selectedTab === "entry" ? "active_modal_tab" : ""}
                        onClick={(e) => handleTabOnClick(e, "entry")}>
                        Entry
                    </li>
                    <li
                        data-tab="personal-information"
                        className={selectedTab === "personalInfo" ? "active_modal_tab" : ""}
                        onClick={(e) => handleTabOnClick(e, "personalInfo")}>
                        Personal information
                    </li>
                    <li
                        data-tab="permission"
                        className={selectedTab === "permissionTab" ? "active_modal_tab" : ""}
                        onClick={(e) => handleTabOnClick(e, "permissionTab")}>
                        Permission
                    </li>
                </ul>
            </div>

            <div>
                <FormProvider {...methods}>
                    <form
                        method="post"
                        className="vr_add_user_from"
                        onSubmit={methods.handleSubmit(handleSubmitdata)}>
                        <div
                            className="modal-from-section entry-sec"
                            style={{ display: selectedTab === "entry" ? "block" : "none" }}>
                            <div className="modal_form">
                                <div className="form_input_wp">
                                    <PlayerUsernameContainer methods={methods} />
                                </div>
                                <div className="form_input_wp">
                                    <PasswordContainer methods={methods} />
                                </div>

                                <p
                                    className="error-msg vr-uname-err"
                                    style={{ display: errorMessage ? "block" : "none" }}>
                                    {errorMessage}
                                </p>
                                <div className="modal_footer">
                                    <button
                                        type="submit"
                                        className="sec_btn"
                                        onClick={(e) => handleNext(e, "entry")}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="modal-from-section personal-information-sec"
                            style={{ display: selectedTab === "personalInfo" ? "block" : "none" }}>
                            <div className="modal_form">
                                <div className="form_input_wp">
                                    <FullNameContainer methods={methods} />
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

                                <p
                                    className="error-msg vr-uname-err"
                                    style={{ display: errorMessage ? "block" : "none" }}>
                                    {errorMessage}
                                </p>
                                <div className="modal_footer">
                                    <button
                                        type="submit"
                                        className="sec_btn"
                                        onClick={(e) => handlePrevious(e, "entry")}>
                                        Previous
                                    </button>
                                    <button
                                        type="submit"
                                        className="sec_btn"
                                        onClick={(e) => handleNext(e, "personalInfo")}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="modal-from-section permission-sec"
                            style={{ display: selectedTab === "permissionTab" ? "block" : "none" }}>
                            <div className="form_checkbox-sec-wp">
                                <PermissionContainer methods={methods} />

                                <div className="modal_footer">
                                    <button
                                        type="submit"
                                        className="sec_btn"
                                        onClick={(e) => handlePrevious(e, "personalInfo")}>
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
                        </div>
                    </form>
                </FormProvider>
            </div>
        </AdminModal>
    );
};

export default AddPlayer;
