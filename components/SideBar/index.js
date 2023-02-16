import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

const SideBar = () => {

    return (
        <>
                <section className="side_bar">
                    <div className="header-logo">
                        <Link href="/">
                            <Image src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <nav className="side_bar_nav navbar_wp">
                        <ul>
                            <li className="active-nav">
                                <Link href="/" title="Statistics">
                                    <i className="fal fa-chart-bar"></i>
                                    <span>Statistics</span>
                                </Link>
                            </li>

                            <li>
                                <Link href="/users" title="Users">
                                    <i className="fal fa-users-cog"></i>
                                    <span>Users</span>
                                </Link>
                            </li>

                            <li className="sub_menu_li nav_menu_open">
                                <Link
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault;
                                    }}
                                    className="sidebar_sub_menu current_menu_active"
                                    title="Users">
                                    <i className="fal fa-globe"></i>
                                    <span>
                                    Global Reports<i className="far fa-angle-right"></i>
                                </span>
                                </Link>

                                <ul>
                                    <li>
                                        <a href="#" title="Report by Agent">
                                            <i className="fal fa-user-secret"></i>
                                            <span>Report by Agent</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Report by Player">
                                            <i className="fal fa-user-cowboy"></i>
                                            <span>Report by Player</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="sub_menu_li">
                                <Link
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault;
                                    }}
                                    title="Users"
                                    className="sidebar_sub_menu">
                                    <i className="fal fa-file-alt"></i>
                                    <span>
                                    Credits Reports<i className="far fa-angle-right"></i>
                                </span>
                                </Link>

                                <ul>
                                    <li>
                                        <a href="#" title="Charges and Withdrawals">
                                            <i className="fal fa-user-secret"></i>
                                            <span>Sales Details</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Player History ">
                                            <i className="fal fa-user-cowboy"></i>
                                            <span>Player History</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="sub_menu_li">
                                <Link
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault;
                                    }}
                                    className="sidebar_sub_menu"
                                    title="Users">
                                    <i className="fal fa-gamepad-alt"></i>
                                    <span>
                                    Game Reports<i className="far fa-angle-right"></i>
                                </span>
                                </Link>
                                <ul>
                                    <li>
                                        <a href="#" title="Casino Game Reports">
                                            <i className="fal fa-user-secret"></i>
                                            <span>Casino</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Player Report">
                                            <i className="fal fa-user-cowboy"></i>
                                            <span>Sports</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Poker Game Reports">
                                            <i className="fal fa-user-cowboy"></i>
                                            <span>Poker</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="sub_menu_li">
                                <Link
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault;
                                    }}
                                    className="sidebar_sub_menu"
                                    title="Users">
                                    <i className="fal fa-sack-dollar"></i>
                                    <span>
                                    Finance <i className="far fa-angle-right"></i>
                                </span>
                                </Link>
                                <ul>
                                    <li className="sub_menu_li">
                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault;
                                            }}
                                            className="sidebar_sub_menu"
                                            title="Agent Report">
                                            <i className="fal fa-user-secret"></i>

                                            <span>
                                            Agents <i className="far fa-angle-right"></i>
                                        </span>
                                        </Link>
                                        <ul>
                                            <li>
                                                <a href="#" title="Agent Report">
                                                    <i className="fal fa-user-secret"></i>
                                                    <span>Operations</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Player Report">
                                                    <i className="fal fa-user-cowboy"></i>
                                                    <span>Balances</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub_menu_li">
                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault;
                                            }}
                                            className="sidebar_sub_menu"
                                            title="Player Report">
                                            <i className="fal fa-user-cowboy"></i>

                                            <span>
                                            Players <i className="far fa-angle-right"></i>
                                        </span>
                                        </Link>
                                        <ul>
                                            <li>
                                                <a href="#" title="Agent Report">
                                                    <i className="fal fa-user-secret"></i>
                                                    <span>Operations</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Player Report">
                                                    <i className="fal fa-user-cowboy"></i>
                                                    <span>Balances</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" title="Player Report">
                                                    <i className="far fa-wallet"></i>
                                                    <span>Withdrawal Request</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="">
                                <Link href="#" title="My Summary">
                                    <i className="fal fa-file-invoice-dollar"></i>
                                    <span>My Summary</span>
                                </Link>
                            </li>

                            <li className="collapse_menu">
                                <Link
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault;
                                    }}>
                                    <i className="fas fa-angle-double-left"></i>
                                    <span>Collapse Menu</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
        </>
    );
};

export default SideBar;
