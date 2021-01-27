import React from 'react';
import Problem from './Problem';

const ProblemB = () => {
    const problem2 = {
        title:'Problema 2: Chess',
        id_input:'input-2',
        id_output:'output-2',
        url:'http://127.0.0.1:8000/api/problem-2/'
    }

    return (
        <Problem data_problem = {problem2}/>
    )
}

export default ProblemB;