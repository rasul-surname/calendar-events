import {useState} from "react";


function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: any) => {
        setValue(e.target.value);
    };

    const onChangeValue = (value: string) => {
        setValue(value);
    };

    return {value, onChange, onChangeValue}
}

export default useInput;