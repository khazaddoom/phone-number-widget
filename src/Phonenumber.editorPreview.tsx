import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <h1>For test only!</h1>;
}

export function getPreviewCss(): string {
    return require("./ui/Phonenumber.css");
}
