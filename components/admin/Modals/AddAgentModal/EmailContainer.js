import React from "react";
import { Controller } from "react-hook-form";

const EmailContainer = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <i className="fal fa-envelope"></i>
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <input
                        name="email"
                        type="email"
                        className="form_input"
                        onChange={onChange}
                        value={value}
                        placeholder="E-mail"
                    />
                )}
            />
        </>
    );
};

export default EmailContainer;
