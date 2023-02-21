import React from "react";
import { Controller } from "react-hook-form";

const SettlementContainer = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <label htmlFor="settlement_type_select">Settle Automatically</label>
            <div className="form-element text-center">
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <select
                            name="settlement_type"
                            id="settlement_type_select"
                            className="form_input"
                            onChange={onChange}
                            value={value}>
                            <option>Select Settlement Type</option>
                            <option value="month">Monthly</option>
                            <option value="week">Weekly</option>
                        </select>
                    )}
                />
                <i className="far fa-angle-down"></i>
            </div>
        </>
    );
};

export default SettlementContainer;
