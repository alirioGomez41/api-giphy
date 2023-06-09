import PropTypes from 'prop-types'
import { useState } from 'react'

const AddCategori = ({setCategori}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategori(c => [inputValue, ...c]);
            setInputValue('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange} 
        />
    </form>
  )
}

AddCategori.propTypes = {
    setCategori: PropTypes.func.isRequired,
};

export default AddCategori