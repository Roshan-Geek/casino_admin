import AdminLayout from "@/components/admin/AdminLayout";
import CheckboxGroup from "@/components/admin/UI/CheckBoxGroup";
import AddBonusModal from "@/components/admin/Modals/AddBonusModal";
import AddRolloverModal from "@/components/admin/Modals/AddRolloverModal";
import ChangePassword from "@/components/admin/Modals/ChangePassword";
import DecreaseModal from "@/components/admin/Modals/DecreaseModal";
import DeductBonusModal from "@/components/admin/Modals/DeductBonusModal";
import DeductRolloverModal from "@/components/admin/Modals/DeductRolloverModal";
import EditUser from "@/components/admin/Modals/EditUserModal";
import IncreaseModal from "@/components/admin/Modals/IncreaseModal";
import UserInfoModal from "@/components/admin/Modals/UserInfoModal";
import LockUserModal from "@/components/admin/Modals/LockUserModal";
import NextTooltip from "@/components/admin/UI/NextTooltip";
import Title from "@/components/admin/UI/Title";
import Link from "next/link";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import { useForm } from "react-hook-form";

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

const Users = () => {
    const [userDropDown, setUserDropDown] = useState(false);
    const [increaseModal, setShowIncreaseModal] = useState(false);
    const [decreaseModal, setShowDecreaseModal] = useState(false);
    const [addRolloverModal, setAddRollover] = useState(false);
    const [deductRolloverModal, setDeductRolloverModal] = useState(false);
    const [addBonusModal, setAddBonus] = useState(false);
    const [deductBonusModal, setDeductBonusModal] = useState(false);
    const [userInfoModal, setUserInfoModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);
    const [editUserModal, setEditUserModal] = useState(false);
    const [lockUserModal, setLockUserModal] = useState(false);

    const methods = useForm();

    const columns = [
        {
            name: "User",
            maxWidth: "200px",
            selector: (row) => row.user,
        },
        {
            name: "Credits",
            grow: 0,
            selector: (row) => row.credits,
        },
        {
            name: "Actions",
            maxWidth: "110px",
            selector: (row) => row.actions,
        },
        {
            name: "Rollover",
            grow: 0,
            selector: (row) => row.rollover,
        },
        {
            name: "Rollover Actions",
            grow: 0.8,
            selector: (row) => row.rolloverActions,
        },
        {
            name: "Bonus",
            grow: 0,
            selector: (row) => row.bonus,
        },
        {
            name: "Bonus Actions",
            grow: 0.8,
            selector: (row) => row.bonusActions,
        },
        {
            name: "User Actions",
            grow: 1.35,
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
                            <NextTooltip title="increase Credit">
                                <button
                                    type="button"
                                    className="sec_btn icon_btn balance_action"
                                    onClick={() => setShowIncreaseModal(true)}>
                                    <i className="far fa-plus"></i>
                                </button>
                            </NextTooltip>
                        </li>
                        <li>
                            <NextTooltip title="decrease Credit">
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
            ),
            rollover: "$19",
            rolloverActions: (
                <div className="table_btn_group form_right_group">
                    <ul>
                        <li>
                            <NextTooltip title="increase Rollover">
                                <button
                                    type="button"
                                    className="sec_btn icon_btn balance_action"
                                    onClick={() => setAddRollover(true)}>
                                    <i className="far fa-plus"></i>
                                </button>
                            </NextTooltip>
                        </li>
                        <li>
                            <NextTooltip title="decrease Rollover">
                                <button
                                    type="button"
                                    className="sec_btn icon_btn balance_action"
                                    onClick={() => setDeductRolloverModal(true)}>
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
                            <NextTooltip title="increase Bonus">
                                <button
                                    type="button"
                                    className="sec_btn icon_btn balance_action"
                                    onClick={() => setAddBonus(true)}>
                                    <i className="far fa-plus"></i>
                                </button>
                            </NextTooltip>
                        </li>
                        <li>
                            <NextTooltip title="decrease Bonus">
                                <button
                                    type="button"
                                    className="sec_btn icon_btn balance_action"
                                    onClick={() => setDeductBonusModal(true)}>
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
                                <button
                                    type="button"
                                    className="sec_btn icon_btn modal-html-btn"
                                    onClick={() => setUserInfoModal(true)}>
                                    <i className="fal fa-info"></i>
                                </button>
                            </NextTooltip>
                        </li>
                        <li>
                            <NextTooltip title="Change Password">
                                <button
                                    type="button"
                                    className="sec_btn icon_btn modal-html-btn"
                                    onClick={() => setPasswordModal(true)}>
                                    <i className="fal fa-key"></i>
                                </button>
                            </NextTooltip>
                        </li>
                        <li>
                            <NextTooltip title="Edit">
                                <button
                                    type="button"
                                    className="sec_btn icon_btn modal-html-btn"
                                    onClick={() => setEditUserModal(true)}>
                                    <i className="fal fa-user-edit"></i>
                                </button>
                            </NextTooltip>
                        </li>
                        <li>
                            <NextTooltip title="Lock">
                                <button
                                    type="button"
                                    className="sec_btn icon_btn modal-html-btn"
                                    onClick={() => setLockUserModal(true)}>
                                    <i className="fal fa-unlock"></i>
                                </button>
                            </NextTooltip>
                        </li>
                        <li>
                            <NextTooltip title="Hide">
                                <button type="button" className="sec_btn icon_btn modal-html-btn">
                                    <i className="fal fa-eye"></i>
                                </button>
                            </NextTooltip>
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <>
            <AdminLayout>
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

                                    <DataTable columns={columns} data={data} theme="solarized" />
                                </div>
                            </Col>

                            <Col lg={3}>
                                <div className="user_map">
                                    <div className="form_checkbox">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                name="user_map_hidden"
                                                value="0"
                                                className="form-check-input"
                                            />
                                            include hidden
                                        </label>
                                    </div>
                                    <ul className="user_map_main_ul">
                                        <li
                                            className={
                                                userDropDown
                                                    ? "user_dropdown current_user "
                                                    : "user_dropdown current_user hide"
                                            }>
                                            <i
                                                className="far fa-angle-down"
                                                onClick={() => setUserDropDown(!userDropDown)}></i>
                                            <Link href="#" title="apidev">
                                                apidev
                                            </Link>
                                            {/* <ul style={{ display: userDropDown ? "block" : "none" }}> */}
                                            <ul>
                                                <li
                                                    className={
                                                        userDropDown ? "user_dropdown " : "user_dropdown hide"
                                                    }>
                                                    <i
                                                        className="far fa-angle-down"
                                                        onClick={() => setUserDropDown(!userDropDown)}></i>
                                                    <Link href="#" title="devagent">
                                                        devagent
                                                    </Link>
                                                    <ul style={{ display: userDropDown ? "block" : "none" }}>
                                                        <li>
                                                            <Link href="#" title="devsubagent">
                                                                devsubagent
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li
                                                    className={
                                                        userDropDown ? "user_dropdown " : "user_dropdown hide"
                                                    }>
                                                    <i
                                                        className="far fa-angle-down"
                                                        onClick={() => setUserDropDown(!userDropDown)}></i>
                                                    <Link href="#" title="guriagent2103">
                                                        guriagent2103
                                                    </Link>
                                                    <ul style={{ display: userDropDown ? "block" : "none" }}>
                                                        <li>
                                                            <Link href="#" title="gurisubagent2101">
                                                                gurisubagent2101
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#" title="gurisubagent2102">
                                                                gurisubagent2102
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guriagent2110">
                                                        guriagent2110
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guruser10">
                                                        guruser10
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guruser11">
                                                        guruser11
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guruser12">
                                                        guruser12
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guruser2">
                                                        guruser2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guruser5">
                                                        guruser5
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guruser7">
                                                        guruser7
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guruser8">
                                                        guruser8
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="guruser9">
                                                        guruser9
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="ljsrocco94">
                                                        ljsrocco94
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </AdminLayout>

            <IncreaseModal method={methods} show={increaseModal} setShow={setShowIncreaseModal} />

            <DecreaseModal method={methods} show={decreaseModal} setShow={setShowDecreaseModal} />

            <AddRolloverModal method={methods} show={addRolloverModal} setShow={setAddRollover} />

            <DeductRolloverModal
                method={methods}
                show={deductRolloverModal}
                setShow={setDeductRolloverModal}
            />

            <AddBonusModal method={methods} show={addBonusModal} setShow={setAddBonus} />

            <DeductBonusModal method={methods} show={deductBonusModal} setShow={setDeductBonusModal} />

            <UserInfoModal method={methods} show={userInfoModal} setShow={setUserInfoModal} />

            <ChangePassword show={passwordModal} setShow={setPasswordModal} />

            <EditUser method={methods} show={editUserModal} setShow={setEditUserModal} />

            <LockUserModal method={methods} show={lockUserModal} setShow={setLockUserModal} />
        </>
    );
};

export default Users;
