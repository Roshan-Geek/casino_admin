import React from "react";
import { Controller } from "react-hook-form";

const DocumentContainer = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <i className="fal fa-id-card"></i>
            <Controller
                name="document"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <input
                        name="document"
                        type="text"
                        className="form_input"
                        onChange={onChange}
                        value={value}
                        placeholder="Document"
                    />
                )}
            />
        </>
    );
};

export default DocumentContainer;
