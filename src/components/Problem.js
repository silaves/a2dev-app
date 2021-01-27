import React, { useEffect, useReducer, useState } from 'react';
import { getSolutionProblem } from '../helpers/getSolutionProblem';
import { uiReducer } from '../reducers/uiReducer';
// import Loading from './messages/Loading';
import ErrorMessage from './messages/ErrorMessage';
const Problem = ({ data_problem }) => {
//     axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

    const {title,id_input,id_output,url} = data_problem;
    const [ dataSolve, setDataSolve ] = useState('');
    const [ dataValue, setDataValue ] = useState('');
    const [uiStatus, dispatch] = useReducer(uiReducer,{
        loading: false,
        error:false,
        msgError:null
    });
    
    const handledSubmit = async () => {
        dispatch({type:'setLoading'});
        const resp = await getSolutionProblem(url,dataValue);
        if ( resp.status ){
            setDataSolve(resp.data);
            dispatch({type:'removeLoading'})
        }else{
            // console.log(resp);
            dispatch({type:'uiSetError',payload:resp.data})
        }
        
    }

    useEffect( () => {
        if (uiStatus.error){
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        }else{
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    },[uiStatus.error]);

    return (
        <>
            {/* { uiStatus.loading && <Loading /> } */}
            { uiStatus.error && <ErrorMessage  dispatch={dispatch} msg={uiStatus.msgError} /> }
            
            <main className={`main ${uiStatus.error?'modal-open':''}`}>
                <div className='container-title'><div className='title'>{title}</div></div>
                <div className='container-inputs'>
                    <div className='section-input'>
                        <textarea id={id_input} spellCheck='false' value={dataValue} onChange={ (e) => setDataValue(e.target.value)}></textarea>
                    </div>
                    <div className='section-send'>
                        <a
                            className={`btn btn-success ${uiStatus.loading?'not-active':''}`}
                            onClick={ () => handledSubmit()}
                        >
                            <i className={uiStatus.loading?'fas fa-circle-notch btn-loading':'fas fa-circle-notch'}></i>
                            {/* { uiStatus.loading && <i className="btn-loading fas fa-circle-notch" style={{transform:'rotate(180deg)'}}></i>} */}
                            Enviar
                        </a>
                    </div>
                    <div className='section-output'>
                        <pre id={id_output}>{dataSolve}</pre>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Problem;