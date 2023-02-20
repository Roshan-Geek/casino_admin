import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AdminModal from "../AdminModal";

const ChangePassword = ({ show, setShow }) => {
    const router = useRouter();
    const [pwd, setPwd] = useState();
    const [conPwd, setConPwd] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);

    const handleChangePassword = async (event) => {
        event.preventDefault();
        const payload = {
            user_id: JSON.parse(localStorage.getItem("Admin")).ID,
            password: pwd,
            confirm_password: conPwd,
        };
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
        };
        setLoading(true);
        await axios
            .post(`${process.env.NEXT_PUBLIC_URGENT_GAMES_API_DOMAIN}/api/change-password.php`, payload, {
                headers,
            })
            .then((response) => {
                if (response.data.status) {
                    setSuccess(response.data.message);
                    router.push("/admin/login");
                } else {
                    debugger;
                    setError(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleClose = () => {
        setShow(false);
        setPwd("");
        setConPwd("");
        setError("");
        setSuccess("");
    };

    return (
        <AdminModal show={show} setShow={setShow} closeModal={handleClose}>
            <h3 className="h3-title modal_title">Change Password</h3>
            <form
                className="modal_form user_change_pwd_form"
                method="post"
                onSubmit={(event) => handleChangePassword(event)}>
                <div className="form_input_wp">
                    <i
                        className={!showPassword ? "fal fa-eye" : "fal fa-eye-slash"}
                        onClick={() => setShowPassword(!showPassword)}></i>
                    <input
                        name="new_password"
                        type={!showPassword ? "password" : "text"}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        className="form_input"
                        placeholder="Users Password"
                    />
                </div>
                <div className="form_input_wp">
                    <i
                        className={!showConPassword ? "fal fa-eye" : "fal fa-eye-slash"}
                        onClick={() => setShowConPassword(!showConPassword)}></i>
                    <input
                        name="confirm_password"
                        type={!showConPassword ? "password" : "text"}
                        value={conPwd}
                        onChange={(e) => setConPwd(e.target.value)}
                        className="form_input"
                        placeholder="confirm Password"
                    />
                </div>
                <p className="error-msg" style={{ display: error && "block" }}>
                    {error}
                </p>
                <div className="modal_footer">
                    <button type="submit" className="sec_btn">
                        Submit
                    </button>
                    <input type="hidden" value="103" name="user_id" />
                    <span className="load-more" style={{ display: loading ? "block" : "none" }}>
                        <i className="fad fa-spinner-third  fa-spin ajax-loader" />
                    </span>
                </div>
                <p className="success-msg" style={{ display: success && "block" }}>
                    {success}
                </p>
            </form>
        </AdminModal>
    );
};

export default ChangePassword;
