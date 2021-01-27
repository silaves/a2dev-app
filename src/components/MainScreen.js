import React from 'react';
import Card from './card/Card';
import {DataProblems} from '../data/DataProblems';

const MainScreen = () => {

    return (
        <>
            <main className='main'>
                <div className='container'>
                    {
                        DataProblems.map( ({id,title, subtitle,url,text}) => 
                            <Card key={id} id={id} title={title} subtitle={subtitle} url={url} text={text} />
                        )   
                    }
                </div>
            </main>
        </>
    )
}

export default MainScreen;