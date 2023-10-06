import * as React from 'react';
import rng from '@liteobject/my-demo-npm'

export default () => {
    return (
        <>
            <h1>My Test Pilet {rng()}</h1>
            <p>
                I added the large file to test pilet size limit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda adipisci autem et nam quis, corporis
                maxime id? Commodi maiores eligendi similique velit porro consectetur! Voluptates quo autem omnis deserunt?
            </p>
        </>
    );
};