import React from "react";
import { Controller } from "react-hook-form";
import CheckBoxGroup from "../../UI/CheckBoxGroup";

const PermissionContainer = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <Controller
                name="permissions"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <CheckBoxGroup name="permissions" methods={methods} />
                )}
            />
        </>
    );
};

export default PermissionContainer;
