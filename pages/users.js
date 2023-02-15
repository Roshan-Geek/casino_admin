import NextTooltip from "@/components/NextTooltip";
import Title from "@/components/Title";
import { Col, Row } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";

const columns = [
    {
        name: "User",
        selector: (row) => row.user,
    },
    {
        name: "Credits",
        selector: (row) => row.credits,
    },
    {
        name: "Actions",
        selector: (row) => row.actions,
    },
    {
        name: "Rollover",
        selector: (row) => row.rollover,
    },
    {
        name: "Rollover Actions",
        selector: (row) => row.rolloverActions,
    },
    {
        name: "Bonus",
        selector: (row) => row.bonus,
    },
    {
        name: "Bonus Actions",
        selector: (row) => row.bonusActions,
    },
    {
        name: "User Actions",
        selector: (row) => row.userActions,
    },
];

const data = [
    {
        id: 1,
        user: "devagent",
        credits: "$238.5",
        actions: (
            <div className="table_btn_group form_right_group">
                <ul>
                    <li>
                        <NextTooltip title="increase">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-plus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="decrease">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-minus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                </ul>
            </div>
        ),
        rollover: "$19",
        rolloverActions: (
            <div className="table_btn_group form_right_group">
                <ul>
                    <li>
                        <NextTooltip title="increase">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-plus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="decrease">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-minus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                </ul>
            </div>
        ),
        bonus: "$0.2",
        bonusActions: (
            <div className="table_btn_group form_right_group">
                <ul>
                    <li>
                        <NextTooltip title="increase">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-plus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="decrease">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-minus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                </ul>
            </div>
        ),
        userActions: (
            <div className="table_btn_group form_right_group">
                <ul>
                    <li>
                        <NextTooltip title="Information">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-info"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="Change Password">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-key"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="Edit">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-user-edit"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="Lock">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-unlock"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="Hide">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-eye"></i>
                            </button>
                        </NextTooltip>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: 2,
        user: "guriagent2103",
        credits: "$238.5",
        actions: (
            <div className="table_btn_group form_right_group">
                <ul>
                    <li>
                        <NextTooltip title="increase">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-plus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="decrease">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-minus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                </ul>
            </div>
        ),
        rollover: "$19",
        rolloverActions: (
            <div className="table_btn_group form_right_group">
                <ul>
                    <li>
                        <NextTooltip title="increase">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-plus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="decrease">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-minus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                </ul>
            </div>
        ),
        bonus: "$0.2",
        bonusActions: (
            <div className="table_btn_group form_right_group">
                <ul>
                    <li>
                        <NextTooltip title="increase">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-plus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="decrease">
                            <button type="button" className="sec_btn icon_btn balance_action">
                                <i className="far fa-minus"></i>
                            </button>
                        </NextTooltip>
                    </li>
                </ul>
            </div>
        ),
        userActions: (
            <div className="table_btn_group form_right_group">
                <ul>
                    <li>
                        <NextTooltip title="Information">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-info"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="Change Password">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-key"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="Edit">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-user-edit"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="Lock">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-unlock"></i>
                            </button>
                        </NextTooltip>
                    </li>
                    <li>
                        <NextTooltip title="Hide">
                            <button type="button" className="sec_btn icon_btn modal-html-btn">
                                <i class="fal fa-eye"></i>
                            </button>
                        </NextTooltip>
                    </li>
                </ul>
            </div>
        ),
    },
];

createTheme(
    "solarized",
    {
        text: {
            primary: "#ffffff",
            secondary: "yellow",
        },
        background: {
            default: "#0B0C27",
        },
        context: {
            background: "#cb4b16",
            text: "#FFFFFF",
        },
        divider: {
            default: "transparent",
        },
    },
    "dark"
);

const users = () => {
    return (
        <>
            <section className="user_main_sec">
                <div className="title_bar">
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <div className="title">
                                <Title>Users</Title>
                                <button
                                    data-user-id="103"
                                    data-loader="1"
                                    data-target="agent-tree-list"
                                    className="sec_btn modal-html-btn agent-tree-modal-btn">
                                    Agent Tree
                                </button>
                            </div>
                        </Col>
                        <Col lg={7} className="text-lg-end">
                            <div className="button_group">
                                <button
                                    data-user-id="103"
                                    data-loader="1"
                                    data-target="add_player_Modal"
                                    className="sec_btn modal-html-btn">
                                    Player <i className="far fa-plus-circle"></i>
                                </button>
                                <button
                                    data-user-id="103"
                                    data-loader="1"
                                    data-target="add_agent_Modal"
                                    className="sec_btn modal-html-btn">
                                    Agent <i className="far fa-plus-circle"></i>
                                </button>
                                <button
                                    data-user-id="103"
                                    data-loader="1"
                                    data-target="add_referral_modal"
                                    className="sec_btn modal-html-btn">
                                    Get Referral Link <i className="far fa-plus-circle"></i>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="user_main_sec_content">
                    <Row>
                        <Col lg={9}>
                            <div className="dataTables_wrapper">
                                <div className="table_filter_topbar">
                                    <Row className="align-items-center">
                                        <Col sm={4}>
                                            <div id="user_data_filter" className="dataTables_filter">
                                                <label>
                                                    <input
                                                        type="search"
                                                        className="form_input"
                                                        placeholder="Username..."
                                                        aria-controls="user_data"
                                                    />
                                                </label>
                                            </div>
                                        </Col>
                                        <Col sm={8}>
                                            <div className="table_custom_filter">
                                                <div className="modal_tablist">
                                                    <ul>
                                                        <li
                                                            data-sort-value="everyone"
                                                            className="active_modal_tab">
                                                            Everyone
                                                        </li>
                                                        <li data-sort-value="agent" className="">
                                                            Agents
                                                        </li>
                                                        <li data-sort-value="player">Players</li>
                                                        <li data-sort-value="hidden">Hidden</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <DataTable
                                    className="dataTable"
                                    columns={columns}
                                    data={data}
                                    theme="solarized"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default users;
