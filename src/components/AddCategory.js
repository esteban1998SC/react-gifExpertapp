import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
      //  e.preventDefault();
      e.preventDefault();
       //console.log(props.setCategories);

       if (inputValue.trim().length > 2) {
            console.log('Submit hechoS');
           setCategories(cats => [inputValue , ...cats]);
           setinputValue('');
       }
    }

    return (
        <form onSubmit={ handleSubmit }>
            {/* <h2>Add Category</h2> */}
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
