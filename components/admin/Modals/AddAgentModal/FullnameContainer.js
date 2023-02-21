import React from "react";
import { Controller } from "react-hook-form";

const FullnameContainer = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <i className="fal fa-user"></i>
            <Controller
                name="fullname"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <input
                        name="fullname"
                        type="text"
                        className="form_input"
                        onChange={onChange}
                        value={value}
                        placeholder="Fullname"
                    />
                )}
            />
        </>
    );
};

export default FullnameContainer;
