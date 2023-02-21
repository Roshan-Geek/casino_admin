import React from "react";
import { Controller } from "react-hook-form";

const UsernameContainer = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <i className="fal fa-user"></i>
            <Controller
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <input type="text" value={value} onChange={onChange} />
                )}
            />
        </>
    );
};

export default UsernameContainer;
