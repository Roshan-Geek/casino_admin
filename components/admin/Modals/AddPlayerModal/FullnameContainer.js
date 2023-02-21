import React from "react";
import { Controller } from "react-hook-form";

const FullNameContainer = ({ methods }) => {
    const { control } = methods;
    return (
        <>
            <i className="fal fa-user"></i>
            <Controller
                name="fullname"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <input type="text" value={value} className="form_input" placeholder="Fullname" onChange={onChange} />
                )}
            />

        </>
    )
}

export default FullNameContainer;