import NextTooltip from "@/components/NextTooltip";
import Title from "@/components/Title";
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

const Home = () => {
    return (
        <>
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
                                <a href="#" className="sec_btn sm_btn modal-html-btn" title="New Player">
                                    New Player <i className="far fa-plus-circle"></i>
                                </a>

                                <a href="#" className="sec_btn sm_btn modal-html-btn" title="New Agent">
                                    New Agent <i className="far fa-plus-circle"></i>
                                </a>
                            </div>
                            <div className="button_group">
                                <a
                                    href="#"
                                    className="sec_btn sm_btn modal-html-btn"
                                    title="Get Referral Link">
                                    Get Referral Link <i className="far fa-plus-circle"></i>
                                </a>
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
        </>
    );
};

export default Home;
