import { Container, Row, Col } from "react-bootstrap";
import LongInImage from "@/assets/admin/images/slot-machine.jpg";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

// Fonts include
import { Poppins } from "@next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Login = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            username,
            password,
        };
        setIsLoading(true);
        await axios
            .post(`${process.env.NEXT_PUBLIC_URGENT_GAMES_API_DOMAIN}/api/login.php`, payload, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                if (response.data.status) {
                    localStorage.setItem("Admin", JSON.stringify(response.data.data));
                    localStorage.setItem("currency", JSON.stringify(response.data.currency));
                    router.push("/admin");
                } else {
                    setError(response.data.error);
                }
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

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
                                    <form
                                        className="login__form"
                                        method="post"
                                        onSubmit={(event) => handleSubmit(event)}>
                                        <h1 className="h1_title">Login</h1>
                                        <p className="error-msg"></p>
                                        <div className="form_input_wp">
                                            <i className="fal fa-user" />
                                            <input
                                                name="username"
                                                type="text"
                                                className="form_input"
                                                onChange={(event) => setUsername(event.target.value)}
                                                value={username}
                                                placeholder="UserName"
                                            />
                                        </div>
                                        <div className="form_input_wp">
                                            <i
                                                onClick={() => setShow(!show)}
                                                className={show ? "fal fa-eye-slash" : "fal fa-eye"}
                                            />
                                            <input
                                                name="password"
                                                type={show ? "text" : "password"}
                                                className="form_input"
                                                onChange={(event) => setPassword(event.target.value)}
                                                value={password}
                                                placeholder="Password"
                                            />
                                        </div>

                                        {error && <div className="error-msg">{error}</div>}

                                        <div className="form_submit">
                                            <button type="submit" name="login" className="sec_btn sm_btn">
                                                Login
                                            </button>
                                            <span
                                                className="load-more"
                                                style={{ display: isLoading ? "block" : "none" }}>
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
