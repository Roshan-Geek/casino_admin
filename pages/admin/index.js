import { useEffect, useState } from "react";
import axios from "axios";
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
import NextTooltip from "@/components/admin/UI/NextTooltip";
import AdminModal from "@/components/admin/AdminModal";
import AddPlayer from "@/components/admin/Modals/AddPlayerModal";
import Title from "@/components/admin/UI/Title";
import AddAgent from "@/components/admin/Modals/AddAgentModal";
import ReferralModal from "@/components/admin/Modals/ReferralModal";
import IncreaseModal from "@/components/admin/Modals/IncreaseModal";
import DecreaseModal from "@/components/admin/Modals/DecreaseModal";
import Loader from "@/components/admin/UI/Loader";
import { useForm } from "react-hook-form";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

const options = {
    responsive: !0,
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                padding: 20,
            },
        },
    },
};

const Dashboard = () => {
    const [netIncome, setNetIncome] = useState({});
    const [currency, setCurrency] = useState(0);
    const [monthNetIncome, setMonthlynetIncome] = useState();
    const [chartLabel, setChartLabels] = useState();
    const [dailyMonthIncome, setDailyMonthIncome] = useState();
    const [dailyDayChartLabel, setDailyDayChartLabel] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [addAgentModal, setAddAgentModal] = useState(false);
    const [referralModal, setReferralModal] = useState(false);
    const [showPlayerModal, setShowPlayerModal] = useState(false);
    const [increaseModal, setShowIncreaseModal] = useState(false);
    const [decreaseModal, setShowDecreaseModal] = useState(false);

    const methods = useForm();

    useEffect(() => {
        setIsLoading(true);
        const con = JSON.parse(window?.localStorage?.getItem("currency"));
        setCurrency(
            Number(netIncome?.currentGGR?.totalCommission).toLocaleString("en-US", {
                style: "currency",
                currency: con?.title || "USD",
            })
        );
        setIsLoading(false);
    }, [netIncome]);

    // net Income
    useEffect(() => {
        const getNetIncome = async (userId) => {
            setIsLoading(true);
            await axios
                .get(
                    `${process.env.NEXT_PUBLIC_AGERE_GAMES_API_DOMAIN}/casinos/casino-admin-reports?action=netIncome&token=${process.env.NEXT_PUBLIC_TOKEN}&casino=${process.env.NEXT_PUBLIC_CASINO}&remote_id=${process.env.NEXT_PUBLIC_REMOTE_ID}/_${userId}`
                )
                .then((response) => {
                    if (response?.data?.commissionInfo) {
                        setNetIncome(response?.data?.commissionInfo);
                    } else {
                        setIsLoading(true);
                    }
                })
                .catch((error) => {
                    console.log(error?.message);
                    setIsLoading(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };
        const loggedInAdmin = JSON.parse(window?.localStorage?.getItem("Admin"));
        getNetIncome(loggedInAdmin?.ID);
    }, []);

    // monthly net Income

    useEffect(() => {
        const getMonthlyNetIncome = async (userId) => {
            const monthArray = [];
            const chartMonthArray = [];
            setIsLoading(true);
            await axios
                .get(
                    `${process.env.NEXT_PUBLIC_AGERE_GAMES_API_DOMAIN}/casinos/casino-admin-reports?action=monthly-netwin&token=${process.env.NEXT_PUBLIC_TOKEN}&casino=${process.env.NEXT_PUBLIC_CASINO}&remote_id=${process.env.NEXT_PUBLIC_REMOTE_ID}/_${userId}`
                )
                .then((response) => {
                    const data = response?.data?.data;
                    data.forEach((item) => {
                        monthArray?.push(item?.netwinIncome);
                        chartMonthArray?.push(item?.monthName);
                    });
                    setMonthlynetIncome(monthArray.reverse());
                    setChartLabels(chartMonthArray.reverse());
                })
                .catch((error) => {
                    console.log(error?.message);
                    setIsLoading(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };
        const loggedInAdmin = JSON.parse(window?.localStorage?.getItem("Admin"));
        getMonthlyNetIncome(loggedInAdmin?.ID);
    }, []);

    // Daily Netwin
    useEffect(() => {
        const getDailyNetWin = async (userId) => {
            const dailyMonthArray = [];
            const dailyChartArray = [];
            setIsLoading(true);
            await axios
                .get(
                    `${process.env.NEXT_PUBLIC_AGERE_GAMES_API_DOMAIN}/casinos/casino-admin-reports?action=daily-netwin&token=${process.env.NEXT_PUBLIC_TOKEN}&casino=${process.env.NEXT_PUBLIC_CASINO}&remote_id=${process.env.NEXT_PUBLIC_REMOTE_ID}/_${userId}`
                )
                .then((response) => {
                    const data = response?.data?.data;
                    data.forEach((item) => {
                        dailyMonthArray?.push(item?.netwinIncome);
                        dailyChartArray?.push(
                            `${new Date(item?.day).getDate()}-${new Date(item?.day).toLocaleDateString(
                                "default",
                                { month: "short" }
                            )}`
                        );
                    });

                    setDailyMonthIncome(dailyMonthArray.reverse());
                    setDailyDayChartLabel(dailyChartArray.reverse());
                })
                .catch((error) => {
                    console.log(error?.message);
                    setIsLoading(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };
        const loggedInAdmin = JSON.parse(window?.localStorage?.getItem("Admin"));
        getDailyNetWin(loggedInAdmin?.ID);
    }, []);

    // monthly netwinIncome
    const netIncomeChartData = {
        labels: chartLabel,
        datasets: [
            {
                data: monthNetIncome,
                backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                borderColor: ["rgba(54, 162, 235, 1)"],
                borderWidth: 1,
                fill: true,
            },
        ],
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    display: true,
                },
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.datasetIndex == 2
                            ? ""
                            : Intl.NumberFormat().format(tooltipItem.yLabel);
                    },
                },
            },
            legend: { display: false },
        },
    };

    // daily month chart
    const DailyMonthChartData = {
        labels: dailyDayChartLabel,
        datasets: [
            {
                labels: ["undefine"],
                data: dailyMonthIncome,
                borderColor: ["rgba(54, 162, 235, 1)"],
                borderWidth: 1,
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                cubicInterpolationMode: "monotone",
                tension: 0.4,
            },
        ],
    };

    // Top Agents of the Month
    const TopAgentsPieChart = {
        labels: ["apiagent"],
        datasets: [
            {
                data: [netIncome?.topAgent?.commission],
                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
                borderWidth: 1,
            },
        ],
        tooltips: {
            callbacks: {
                label: function (a, e) {
                    return Intl.NumberFormat().format(e.datasets[a.datasetIndex].data[a.index]);
                },
            },
        },
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
                                        onClick={() => setShowPlayerModal(true)}
                                        className="sec_btn sm_btn modal-html-btn">
                                        New Player <i className="far fa-plus-circle"></i>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setAddAgentModal(true)}
                                        className="sec_btn sm_btn modal-html-btn">
                                        New Agent <i className="far fa-plus-circle"></i>
                                    </button>
                                </div>
                                <div className="button_group">
                                    <button
                                        type="button"
                                        onClick={() => setReferralModal(true)}
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
                                                            className="sec_btn icon_btn balance_action"
                                                            onClick={() => setShowIncreaseModal(true)}>
                                                            <i className="far fa-plus"></i>
                                                        </button>
                                                    </NextTooltip>
                                                </li>
                                                <li>
                                                    <NextTooltip title="decrease">
                                                        <button
                                                            type="button"
                                                            className="sec_btn icon_btn balance_action"
                                                            onClick={() => setShowDecreaseModal(true)}>
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
                                    {isLoading ? (
                                        <Loader />
                                    ) : (
                                        <ul>
                                            <li>
                                                <label>Current month :</label>{" "}
                                                <span>{currency ? currency : "00"}</span>
                                            </li>
                                            <li>
                                                <label>Previous month :</label>{" "}
                                                <span>{netIncome?.lastGGR?.totalCommission}</span>
                                            </li>
                                        </ul>
                                    )}
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
                                <h3 className="h3-title">Monthly Netwin</h3>
                                {isLoading ? <Loader /> : <Line data={netIncomeChartData} />}
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-20">
                        <Col lg={8}>
                            <div className="dashboard_box">
                                <h3 className="h3-title">Daily Netwin</h3>
                                {isLoading ? <Loader /> : <Line data={DailyMonthChartData} />}
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="dashboard_box">
                                <h3 className="h3-title">Top Agents of the Month</h3>
                                {isLoading ? <Loader /> : <Pie data={TopAgentsPieChart} options={options} />}
                            </div>
                        </Col>
                    </Row>
                </section>
            </AdminLayout>

            <AddPlayer show={showPlayerModal} setShow={setShowPlayerModal} />

            <AddAgent show={addAgentModal} setShow={setAddAgentModal} />

            <ReferralModal show={referralModal} setShow={setReferralModal} />

            <IncreaseModal show={increaseModal} setShow={setShowIncreaseModal} />

            <DecreaseModal show={decreaseModal} setShow={setShowDecreaseModal} />
        </>
    );
};

export default Dashboard;
