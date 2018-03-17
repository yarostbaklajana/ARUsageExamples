import React from 'react';
import { Link } from 'react-router-dom';

export const Search = ({history}) => (<div>
    <button onClick={() => { history.push('/ARUsageExamples/navigate/1')}}>Show Employee</button>
</div>);
