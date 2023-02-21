import React from 'react'
import { Controller } from 'react-hook-form'
import CheckboxGroup from '../../UI/CheckBoxGroup';

const PermissionContainer = ({ methods }) => {
    const { control } = methods;
    return (
        <>

            <Controller
                name="permissions"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <CheckboxGroup name="permissions" methods={methods} />
                )}
            />
        </>
    )
}

export default PermissionContainer