import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('submit')
        if (inputValue.trim().length > 1){
            setCategories( c => [inputValue, ...c])
            setInputValue('')
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Busca un GIF o escribe una categoria</label>
            <input type='text'
            placeholder='Escribe y presiona Enter' 
            value={inputValue}
            onChange={handleInputChange}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


