import * as React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { Header } from './components/Header/Header';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Fun } from './components/Fun/Fun';
import {Contacts} from "./components/Contacts/Contacts";
import { Main } from './style/main';
import data from './data.json'

interface Response {
    portfolio: any
    fun: any
}

const Root: React.FC = () => {
    /*const [data, setData] = React.useState({
        portfolio: [],
        fun: []
    });

    const getData = React.useCallback(async () => {
        try {
            const data = await fetch("/data.json")
            const responseValue = await (() => {
                if (data.ok) {
                    return data.json();
                } else {
                    //@ts-ignore
                    throw new Error('Unsuccessful response');
                }
            })();
            setData(responseValue);
        } catch (e) {
            console.log(e)
        }
    }, []);*/

    React.useEffect(() => {
        //getData()
    }, [])

    return (
        <>
            <Normalize />
            <Main />

            <div id="wrapper">
                <Header alt='STOLENTIQ STUDIO'/>

                <Portfolio data={data.portfolio} />

                <Fun />

                <Contacts />

            </div>
        </>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
