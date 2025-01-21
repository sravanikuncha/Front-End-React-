import { Form } from '../Form/Form';
import { ProductList } from '../ProductList/ProductList';
import homecss from './Home.module.css';
import { useRef } from 'react';
import { useHomeContext } from './HomeContext';

export function Home(){

    const {searchByName}=useHomeContext();

    const searchRef=useRef("");

    const nameSearch=()=>{
        const value=searchRef.current.value;
        console.log(value)
        searchByName(value);
    }

    return (
        <>
            <div className={homecss.homeStyle}>
                <div className={homecss.search}>
                    <input  onChange={nameSearch} className={homecss.searchinput} ref={searchRef} placeholder="Search By Name" type="text"></input>
                </div>
                <div className={homecss.main}>
                    <div className={homecss.homeFilter}>
                        <Form/>
                    </div>
                    <div className={homecss.products}>
                        <ProductList/>
                    </div>
                </div>
            </div>
        </>
    );
}