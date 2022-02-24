import React, { useEffect, useState, useCallback } from 'react'
import './app.css'
import Aside from './components/aside/Aside';
import Header from './components/Header';
import Alert from './components/middlesetion/Alert';
import Navbar from './components/sideNav/Navbar';

const fdata1 = React.createContext();

function App() {
        const [arr, setArr] = useState([]);
        const [load, setLoader] = useState(false)
        const func = useCallback(
                async () => {
                        const fdata = await fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data');
                        setLoader(false)
                        const gdata = await fdata.json();
                        setArr(gdata.data[0]);
                        setLoader(true)
                }, [])

        useEffect(() => {
                func();
        }, [func])
        return (
                <>
                        <Header />

                        <div className='row'>
                                <div className="col-sm-2 border " id='hel' ><Navbar /></div>
                                <fdata1.Provider value={arr}>
                                        <div className="col-sm-7 h-100  "><Alert value={load} /></div>
                                        <div className="col-sm-3 border "><Aside value={load} /></div>
                                </fdata1.Provider>
                        </div>

                </>
        );
}
export default App;
export { fdata1 };