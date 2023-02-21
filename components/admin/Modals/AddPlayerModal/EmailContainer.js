import React from "react";
import { Controller } from "react-hook-form";

const EmailContainer = ({ methods }) => {
    const { control } = methods
    return (
        <>
            <i className="fal fa-envelope"></i>
            <Controller
                name="user_email"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <input type="email" value={value} className="form_input" placeholder="E-mail" onChange={onChange} />
                )}
            />
        </>
    )
}

export default EmailContainer;