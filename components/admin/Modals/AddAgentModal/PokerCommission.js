import React from "react";
import { Controller } from "react-hook-form";

const PokerCommission = ({ methods }) => {
    const { control } = methods;

    return (
        <>
            <span>Poker</span>
            <div className="form-element">
                <Controller
                    name="pokerCommission"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <input
                            type="number"
                            name="commission[poker]"
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

export default PokerCommission;
