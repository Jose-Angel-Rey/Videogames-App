import "./CustomCheckbox.scss"
import React from 'react'

export default function CustomCheckbox({ checkboxValue, onChangeFunction, isActive }) {
    return (
        <div className={`custom-checkbox ${isActive ? 'custom-checkbox--active' : ''}`}>

            <label
                className="custom-checkbox__label"
                htmlFor={checkboxValue} >
                {checkboxValue}
            </label>
            <input
                className="custom-checkbox__input"
                type="checkbox"
                id={checkboxValue}
                onChange={e => onChangeFunction(e)}
                name={checkboxValue}
                value={checkboxValue}
            />
        </div>
    )
}
