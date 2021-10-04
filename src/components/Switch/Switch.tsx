import { observer } from "mobx-react";
import { useCallback, useEffect, useState } from "react";
import cs from "classnames";
import { noop, map } from "lodash";

export interface SwitchProps {
    onChange?: (value: string) => void;
    onInit: (value: string) => void;
}

export function SwitchModule({ onChange = noop, onInit }: SwitchProps) {
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

    const [selectedValue, setSelectedValue] = useState<string>(values[0].value);

    const handleChange = useCallback(
        (e) => {
            onChange(e.currentTarget.value);
            setSelectedValue(e.currentTarget.value);
        },
        [onChange]
    );

    useEffect(() => onInit(selectedValue), [onInit, selectedValue]);

    return (
        <div className="space-x-1 flex">
            {map(values, ({ value, text }) => (
                <div key={value}>
                    <input
                        className="hidden"
                        onChange={handleChange}
                        type="radio"
                        id={value}
                        name="time"
                        value={value}
                    />
                    <label
                        className={cs(
                            "cursor-pointer border border-transparent rounded-full p-2",
                            {
                                "text-gray-300": selectedValue !== value,
                                "border-blue-500 text-blue-500":
                                    selectedValue === value,
                            }
                        )}
                        htmlFor={value}
                    >
                        {text}
                    </label>
                </div>
            ))}
        </div>
    );
}

export const Switch = observer(SwitchModule);
