import React from "react";
import { Controller } from "react-hook-form";

const SportCommission = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <span>Sports</span>
            <div className="form-element">
                <Controller
                    name="sportsCommission"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <input
                            type="number"
                            name="commission[sports]"
                            className="form_input"
                            step=".01"
                            onChange={onChange}
                            value={value}
                            placeholder=""
                        />
                    )}
                />
                <i className="far fa-percent"></i>
            </div>
        </>
    );
};

export default SportCommission;
