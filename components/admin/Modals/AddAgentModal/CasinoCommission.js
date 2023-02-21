import React from "react";
import { Controller } from "react-hook-form";

const CasinoCommission = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <span>Casino</span>
            <div className="form-element">
                <Controller
                    name="casinoCommission"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <input
                            type="number"
                            name="commission[casino]"
                            className="form_input"
                            step=".01"
                            placeholder=""
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
                <i className="far fa-percent"></i>
            </div>
        </>
    );
};

export default CasinoCommission;
