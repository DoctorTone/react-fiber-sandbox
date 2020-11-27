import React from 'react';

const Title = (props) => {
    return (
        <h1 className="title w-100 text-center text-warning">
            {props.title}
        </h1>
    )
}

export default Title;