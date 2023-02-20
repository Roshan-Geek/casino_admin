import AdminModal from "@/components/admin/AdminModal";
import { FormProvider } from "react-hook-form";
import NextTooltip from "../../UI/NextTooltip";

const DecreaseModal = ({ methods, show, setShow }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <AdminModal show={show} closeModal={handleClose}>
            <h3 className="h3-title modal_title">deduct credits</h3>
            <FormProvider {...methods}>
                <form action="" className="add_credit_form">
                    <div className="form_input_group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input-modal-addon">
                                <i className="fas fa-user" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form_input"
                            name="user_name"
                            readOnly=""
                            defaultValue="apidev"
                        />
                        <input
                            type="text"
                            className="form_input"
                            name="user_current_balance"
                            readOnly=""
                            defaultValue="847.00"
                        />
                    </div>

                    <div className="form_input_group balance_input_group">
                        <div className="d-flex">
                            <div className="input-group-prepend">
                                <span className="input-group-text input-modal-addon">
                                    <i className="fas fa-coins" aria-hidden="true"></i>
                                </span>
                            </div>
                            <input
                                type="number"
                                className="form_input user_balanace_input"
                                name="user_balance"
                                aria-label="amount"
                                autoComplete="off"
                                defaultValue="0"
                                min="0"
                                step=".01"
                                placeholder="0.00"
                            />
                        </div>
                        <div className="table_btn_group form_right_group">
                            <ul>
                                <li>
                                    <NextTooltip title="increase Credits">
                                        <button type="button" className="sec_btn icon_btn balance_action">
                                            <i className="far fa-plus"></i>
                                        </button>
                                    </NextTooltip>
                                </li>
                                <li>
                                    <NextTooltip title="decrease Credits">
                                        <button type="button" className="sec_btn icon_btn balance_action">
                                            <i className="far fa-minus"></i>
                                        </button>
                                    </NextTooltip>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="add_coin_group">
                        <ul>
                            <li>
                                <button
                                    type="button"
                                    data-value="100"
                                    className="sec_btn sm_btn"
                                    data-button-toggle="tooltip"
                                    title=""
                                    data-original-title="increase 100">
                                    <i className="far fa-plus"></i> 100
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    data-value="1000"
                                    className="sec_btn sm_btn"
                                    data-button-toggle="tooltip"
                                    title=""
                                    data-original-title="increase 1,000">
                                    <i className="far fa-plus"></i> 1,000
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    data-value="10000"
                                    className="sec_btn sm_btn"
                                    data-button-toggle="tooltip"
                                    title=""
                                    data-original-title="increase  10,000">
                                    <i className="far fa-plus"></i> 10,000
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="form_input_group add_player_credits_info">
                        <input type="hidden" name="user_role" defaultValue="agent" />
                    </div>

                    <div className="modal_footer">
                        <button type="submit" className="sec_btn">
                            Submit
                        </button>
                        <span className="load-more">
                            <i className="fad fa-spinner-third  fa-spin ajax-loader"></i>
                        </span>
                        <input type="hidden" name="user_id" defaultValue="103" />
                        <input type="hidden" name="balance_action" defaultValue="credit" />
                    </div>
                    <p className="error-msg"></p>
                </form>
            </FormProvider>
        </AdminModal>
    );
};

export default DecreaseModal;
