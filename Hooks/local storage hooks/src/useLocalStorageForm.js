import {useState,useEffect} from 'react';

export const useLocalStorageForm=()=>{
    const [formData,setFormData]=useState({name:"",age:""});

    useEffect(()=>{
        const name=localStorage.getItem("name");
        const age=localStorage.getItem("age");

        if(name && age){
            setFormData({name,age});
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("name",formData.name);
        localStorage.setItem("age",formData.age);
    },[formData])

    return {formData,setFormData};
}