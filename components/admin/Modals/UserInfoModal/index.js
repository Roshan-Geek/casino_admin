import AdminModal from "@/components/admin/AdminModal";

const UserInfoModal = ({ show, setShow }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <AdminModal show={show} closeModal={handleClose}>
            <h3 className="h3-title modal_title">User Information</h3>

            <div className="two_col_row">
                <div className="two_col">
                    <ul className="user_info_list">
                        <li>
                            <label>id :</label>
                            <span>109</span>
                        </li>
                        <li>
                            <label>User :</label>
                            <span>devagent</span>
                        </li>
                        <li>
                            <label>Father :</label>
                            <span>apidev</span>
                        </li>
                        <li>
                            <label>Role :</label>
                            <span>agent</span>
                        </li>
                        <li>
                            <label>Agents :</label>
                            <span>
                                <button data-userrole="agent" data-userid="109" className="user_info_sort">
                                    1
                                </button>
                            </span>
                        </li>
                        <li>
                            <label>Players :</label>
                            <span>
                                <button data-userrole="player" data-userid="109" className="user_info_sort">
                                    3
                                </button>
                            </span>
                        </li>
                        <li>
                            <label>Created :</label>
                            <span>10/20/2022</span>
                        </li>
                    </ul>
                </div>
                <div className="two_col">
                    <h6 className="h6-title">Structure :</h6>
                    <ul className="structure_list">
                        <li style={{ "--data-count": "0" }}>apidev</li>
                        <li style={{ "--data-count": "1" }}>devagent</li>
                    </ul>
                </div>
            </div>
        </AdminModal>
    );
};

export default UserInfoModal;
