import React from "react";
import { Controller } from "react-hook-form";

const PhoneContainer=({methods})=>{
    const {control}=methods
    return (
        <>
          <i className="fal fa-phone-alt"></i>
         <Controller
               name="phone" 
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <input type="text" value={value} className="form_input" placeholder="phone" onChange={onChange} />
                )}
            />
        </>
    )
}

export default PhoneContainer;