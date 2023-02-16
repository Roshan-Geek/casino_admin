import { Container, Row, Col } from "react-bootstrap";
import LongInImage from "@/assets/admin/images/slot-machine.jpg";
import Image from "next/image";

// Fonts include
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Login = () => {
    return (
        <>
            <style jsx global>{`
                :root {
                    --body_font: ${poppins.style.fontFamily};
                }
            `}</style>

            <section className="login__page">
                <Container fluid>
                    <Row>
                        <Col lg={5}>
                            <div className="sec_wp">
                                <div className="login__form_wp">
                                    <form className="login__form" onSubmit={(e) => e.preventDefault()}>
                                        <h1 className="h1_title">Login</h1>
                                        <p className="error-msg"></p>
                                        <div className="form_input_wp">
                                            <i className="fal fa-user" />
                                            <input
                                                name="username"
                                                type="text"
                                                className="form_input"
                                                placeholder="UserName"
                                            />
                                        </div>
                                        <div className="form_input_wp">
                                            <i className="fal fa-eye" />
                                            <input
                                                name="password"
                                                type="password"
                                                className="form_input"
                                                placeholder="Password"
                                            />
                                        </div>

                                        <div className="form_submit">
                                            <button type="submit" name="login" className="sec_btn sm_btn">
                                                Login
                                            </button>
                                            <span className="load-more">
                                                <i className="fad fa-spinner-third  fa-spin ajax-loader" />
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="login_form_bg back-img">
                                <Image src={LongInImage} fill objectFit="cover" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;
