import React from 'react';
import { Link } from 'react-router-dom';

export const Search = ({history}) => (<div>
    <button onClick={() => { history.push('/navigate/1')}}>Show Employee</button>
</div>);
