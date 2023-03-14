import { ReactElement, createElement, useState } from "react";

import { PhonenumberContainerProps } from "../typings/PhonenumberProps";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import "./ui/Phonenumber.css";

export function Phonenumber({ phone }: PhonenumberContainerProps): ReactElement {
    const [value, setValue] = useState<string>()
    const handleChange = (valuePut:string) => {
        phone.setValue(valuePut)
        setValue(valuePut)
    }
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={handleChange}/>
    )
}
