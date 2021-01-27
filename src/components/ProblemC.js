import React from 'react';
import Problem from './Problem';

const ProblemC = () => {
    const problem3 = {
        title:'Problema 3: String value',
        id_input:'input-3',
        id_output:'output-3',
        url:'http://127.0.0.1:8000/api/problem-3/'
    }

    return (
        <Problem data_problem = {problem3}/>
    )
}

export default ProblemC;