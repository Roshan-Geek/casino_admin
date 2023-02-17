import NextTooltip from "@/components/admin/NextTooltip";
import Title from "@/components/admin/Title";
import { Col, Row } from "react-bootstrap";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminModal from "@/components/admin/AdminModal";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

export const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    plugins: {
        title: {
            display: true,
        },
        legend: {
            position: "bottom",
        },
    },
};

const Dashboard = () => {
    const [addPlayerModal, setAddPlayerModal] = useState(false);
    const [addAgentModal, setAddAgentModal] = useState(false);
    const [ReferralModal, setReferralModal] = useState(false);

    const playerModal = () => {
        setAddPlayerModal(true);
    };

    const agentModal = () => {
        setAddAgentModal(true);
    };

    const ReferralModalClick = () => {
        setReferralModal(true);
    };

    return (
        <>
            <AdminLayout>
                <section className="dashboard_main">
                    <div className="title_bar">
                        <Row className="align-items-center">
                            <Col lg={12}>
                                <div className="title">
                                    <Title>Dashboard</Title>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row className="g-20 justify-content-center">
                        <Col xl={4} lg={6}>
                            <div className="dashboard_box">
                                <h3 className="h3-title">Fast Charge</h3>
                                <div className="button_group">
                                    <button
                                        type="button"
                                        onClick={playerModal}
                                        className="sec_btn sm_btn modal-html-btn">
                                        New Player <i className="far fa-plus-circle"></i>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={agentModal}
                                        className="sec_btn sm_btn modal-html-btn">
                                        New Agent <i className="far fa-plus-circle"></i>
                                    </button>
                                </div>
                                <div className="button_group">
                                    <button
                                        type="button"
                                        onClick={ReferralModalClick}
                                        className="sec_btn sm_btn modal-html-btn">
                                        Get Referral Link <i className="far fa-plus-circle"></i>
                                    </button>
                                </div>

                                <div className="referral-link-response"></div>

                                <form action="" method="post" className="credit_debit_dashboard">
                                    <div className="form_input_group">
                                        <div className="d-flex">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text input-modal-addon">
                                                    <i className="fal fa-user"></i>
                                                </span>
                                            </div>
                                            <input
                                                name="username"
                                                type="text"
                                                className="form_input"
                                                autoComplete="off"
                                                placeholder="Username"
                                            />
                                        </div>
                                        <div className="table_btn_group form_right_group">
                                            <ul>
                                                <li>
                                                    <NextTooltip title="increase">
                                                        <button
                                                            type="button"
                                                            className="sec_btn icon_btn balance_action">
                                                            <i className="far fa-plus"></i>
                                                        </button>
                                                    </NextTooltip>
                                                </li>
                                                <li>
                                                    <NextTooltip title="decrease">
                                                        <button
                                                            type="button"
                                                            className="sec_btn icon_btn balance_action">
                                                            <i className="far fa-minus"></i>
                                                        </button>
                                                    </NextTooltip>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="error-msg ">Username does not exist!</p>
                                </form>
                            </div>
                        </Col>
                        <Col xl={4} lg={6}>
                            <div className="dashboard_box">
                                <h3 className="h3-title">Net Income</h3>
                                <div className="dashboard_list">
                                    <ul>
                                        <li>
                                            <label>Current month :</label> <span>-$1.5825</span>
                                        </li>
                                        <li>
                                            <label>Previous month :</label> <span>$0</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="badge_wp d-none">
                                    <span className="badge badge-minus">
                                        -4.39% <i className="far fa-level-down"></i>
                                    </span>
                                    <span className="badge badge-plus">
                                        +2.90% <i className="far fa-level-up"></i>
                                    </span>
                                    <i className="fal fa-eye"></i>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={6}>
                            <div className="dashboard_box">
                                <h3 className="h3-title">Net Income</h3>
                                <Line data={data} />
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-20">
                        <Col lg={8}>
                            <div className="dashboard_box">
                                <h3 className="h3-title">Daily Netwin</h3>
                                <Line data={data} />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="dashboard_box">
                                <h3 className="h3-title">Top Agents of the Month</h3>
                                <Pie data={data} options={options} />
                            </div>
                        </Col>
                    </Row>
                </section>
            </AdminLayout>

            <AdminModal show={addPlayerModal} setShow={setAddPlayerModal} size="lg">
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
            </AdminModal>

            <AdminModal show={addAgentModal} setShow={setAddAgentModal} size="lg">
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
                                <i className="fal fa-user"></i>
                                <input
                                    name="username"
                                    type="text"
                                    className="form_input"
                                    placeholder="UserName"
                                />
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
                    <p className="error-msg vr-commission-settlement-type-err">
                        Please select settlement type.
                    </p>
                    <p className="error-msg vr-permission-err">Please add user game permission.</p>
                    <p className="success-msg">your account has been created successfully.</p>
                </form>
            </AdminModal>

            <AdminModal show={ReferralModal} setShow={setReferralModal} size="lg">
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
                                    autocomplete="off"
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
                                    autocomplete="off"
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
                    <p className="error-msg referral-commission-err">
                        Please enter commission between 0 to 100.
                    </p>
                    <p className="error-msg referral-commission-link-err">
                        Please enter link address you want to create.
                    </p>
                    <p className="success-msg">your account has been created successfully.</p>
                    <p className="response-referral-link"></p>
                </form>
            </AdminModal>
        </>
    );
};

export default Dashboard;
