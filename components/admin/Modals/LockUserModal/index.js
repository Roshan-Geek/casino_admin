import AdminModal from "@/components/admin/AdminModal";
import { FormProvider } from "react-hook-form";

const LockUserModal = ({ methods, show, setShow }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <AdminModal show={show} closeModal={handleClose}>
            <h3 className="h3-title modal_title">Lock User</h3>

            <FormProvider {...methods}>
                <form class="modal_form user_block_form">
                    <div class="form_input_wp">
                        <label for="">Lock reason (optional)</label>
                        <textarea
                            name="user_block_reason"
                            rows="3"
                            placeholder="Massage"
                            class="form_input"
                        />
                    </div>
                    <div class="modal_footer">
                        <button type="submit" class="sec_btn">
                            Submit
                        </button>
                        <span class="load-more">
                            <i class="fad fa-spinner-third  fa-spin ajax-loader"></i>
                        </span>
                        <input type="hidden" name="user_id" value="116" />
                    </div>
                </form>
            </FormProvider>
        </AdminModal>
    );
};

export default LockUserModal;
