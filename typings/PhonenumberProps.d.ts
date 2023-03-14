/**
 * This file was generated from Phonenumber.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface PhonenumberContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    phone: EditableValue<string>;
}

export interface PhonenumberPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    phone: string;
}
