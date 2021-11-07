import { observer } from "mobx-react";
import { Switch as SwitchComponent } from "../../components";

const values = [
    {
        value: "week",
        text: "Last week",
    },
    {
        value: "month",
        text: "Last month",
    },
    {
        value: "year",
        text: "Last year",
    },
];

export function SwitchModule() {
    return <SwitchComponent onInit={(e) => console.log(e)} values={values} />;
}

export const Switch = observer(SwitchModule);
