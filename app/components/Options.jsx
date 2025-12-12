import React from 'react';
import '@/app/globals.css'

const Options = ({ options, selectedOption, onSelect }) => {
    return (
        <div className='options-container'>
            {options.map((option, index) => {
                const isSelected = option === selectedOption;

                return (
                    <button
                        key={index}
                        onClick={() => onSelect(option)}
                        className= {`option-button ${isSelected ? 'selected' : ''}`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

export default Options;
