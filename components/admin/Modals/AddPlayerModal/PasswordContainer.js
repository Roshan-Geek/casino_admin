import React from 'react'
import { Controller } from 'react-hook-form';
const PasswordContainer = ({ methods }) => {
    const { control } = methods;
    
    return (
        <>
             
            <i className="fal fa-eye"></i>
            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <input type="password" value={value} className="form_input" placeholder="Password" onChange={onChange} />
                )}
            />
        </>
    )
}

export default PasswordContainer;