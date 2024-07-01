import { useState } from "react"




const useInputState = (defaultValue = null) =>{
    const [value, setValue] = useState(defaultValue);

    // const handleChange = e => {
    //     setValue(e.target.value);
    // }
    // return [value, handleChange];

    const onChange = e =>{ // onChange = use it if value is returned as object;
        setValue(e.target.value);
    }

    return { //returned as object;
        value,
        onChange
    }
}

export default useInputState;