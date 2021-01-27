import React from 'react';
import Problem from './Problem';

const ProblemA = () => {

    const problem1 = {
        title:'Problema 1: Liga de Padel',
        id_input:'input-1',
        id_output:'output-1',
        url:'http://127.0.0.1:8000/api/problem-1/'
    }

    return (
        <Problem data_problem = {problem1}/>
    )
}
    
export default ProblemA;