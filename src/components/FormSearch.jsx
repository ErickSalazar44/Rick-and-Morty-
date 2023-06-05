import { useEffect, useRef, useState } from "react"
import './style/formSearch.css'
import MensajeError from "./MensajeError"

export const FormSearch = ({totalLocation, setInputLocationName}) => {
    const valueInput = useRef(null)
    const [inputIsEmpty, setInputIsEmpty] = useState(false)
    const [autoCompleteOptions, setAutoCompleteOptions] = useState([])
    const [actualizacionInput, setActualizacionInput] = useState("")

    const handleChange = (e) => {
        const inputValue = e.target.value.trim();
        const input = inputValue.toLowerCase()
        setActualizacionInput(input)
    }
    useEffect(()=> {
        if (actualizacionInput === "") {
            setTimeout(() => {
                setInputIsEmpty(false)
            }, 2000);
            setInputIsEmpty(true)
            setAutoCompleteOptions([])
            return;
        }
        const options = totalLocation?.results.filter((option)=> {
            const name = option.name.toLowerCase()
            const input = actualizacionInput.toLowerCase()
            return name.includes(input)
        })

        setAutoCompleteOptions(options)
    },[actualizacionInput])

    const handleInputChange = (e) => {  
        e.preventDefault()
        setActualizacionInput('')
        setAutoCompleteOptions([])
        setInputLocationName(actualizacionInput)
    }
    
    const handleOption = (option) => {
        const enviarValue = option.name
        setActualizacionInput(enviarValue)
    }
    return (
        <>
            <form>
                <div>
                    <input
                        onChange={handleChange}
                        className="inputdesing" 
                        type="text"
                        placeholder="Enter Location"
                        value={actualizacionInput}
                        ref={valueInput}
                    />
                    <ul className="input__options">
                        {
                            autoCompleteOptions?.map(option => (
                                <li onClick={() => handleOption(option)} key={option.id}>{option.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <button onClick={handleInputChange} className="form__btn">Search</button>
            </form>
            {
                inputIsEmpty && <MensajeError/>
            }
        </>
    )
}
