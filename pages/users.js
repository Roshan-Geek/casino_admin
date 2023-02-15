import NextTooltip from "@/components/NextTooltip";
import Title from "@/components/Title";
import { Col, Row } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";

const columns = [
    {
        name: "Title",
        selector: (row) => row.title,
    },
    {
        name: "Year",
        selector: (row) => row.year,
    },
];

const data = [
    {
        id: 1,
        title: "Beetlejuice",
        year: "1988",
    },
    {
        id: 2,
        title: "Ghostbusters",
        year: "1984",
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
            default: "rgba(255,255,255,10%)",
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
