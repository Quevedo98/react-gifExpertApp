import React, {useState} from 'react';
import PropTypes from 'prop-types';


const AddCategory = ( { setCategories } ) => {// El componente recibe un metodo del componente padre

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cates => [inputValue, ...cates] );
            setInputValue('');
        }
    } 

    return (        
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
};

export default AddCategory;


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}