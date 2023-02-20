import React from "react";
import AdminModal from "../../AdminModal";

const ReferralModal = ({ methods, show, setShow }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <AdminModal show={show} closeModal={handleClose} size="lg">
            <h3 className="h3-title modal_title">Create Referral Link</h3>

            <form className="create_referral_link" id="create_referral_link">
                <div className="modal-from-section entry-sec">
                    <div className="modal_form">
                        <div className="form_input_wp">
                            <i className="fal fa-percent"></i>
                            <input
                                name="referral_commission"
                                type="number"
                                className="form_input"
                                id="referral_commission"
                                autoComplete="off"
                                step=".01"
                                min="0"
                                max="100"
                                placeholder="Referral Commission"
                            />
                        </div>
                        <div className="form_input_wp">
                            <i className="fal fa-link"></i>
                            <input
                                name="referral_link"
                                type="text"
                                className="form_input"
                                id="referral_link"
                                autoComplete="off"
                                placeholder="Referral Link"
                            />
                        </div>
                        <p className="note">*Enter a Commission Less then 0%</p>
                        <div className="form_input_wp generated-referral-link">
                            <a target="_blank" href="" className="generated-referral-link-anchor"></a>

                            <button
                                type="button"
                                className="generated-referral-link-icon-button sec-btn icon_btn balance_action"
                                data-button-toggle="tooltip"
                                title=""
                                data-original-title="Copy Link">
                                <i className="fal fa-copy generated-referral-link-icon"></i>
                            </button>
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
                <p className="error-msg referral-max-commission-err "></p>
                <p className="error-msg referral-commission-err">Please enter commission between 0 to 100.</p>
                <p className="error-msg referral-commission-link-err">
                    Please enter link address you want to create.
                </p>
                <p className="success-msg">your account has been created successfully.</p>
                <p className="response-referral-link"></p>
            </form>
        </AdminModal>
    );
};
export default ReferralModal;
