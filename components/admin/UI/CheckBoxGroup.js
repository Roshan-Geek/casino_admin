import { useState } from "react";

const CheckBoxGroup = (props) => {
    const [checked, setChecked] = useState([]);
    const checkList = ["Sports", "Casino", "Poker"];

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    return (
        <>
            <div className="form_checkbox-sec-wp">
                {checkList.map((item, index) => (
                    <div className="form_checkbox-sec" key={index}>
                        <div className="form_checkbox">
                            <input name={props.name} value={item} type="checkbox" onChange={handleCheck} />
                            <div className="form_checkbox-header">
                                <span>{item}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CheckBoxGroup;
