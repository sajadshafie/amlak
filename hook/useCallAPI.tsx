import api from '@/config/api';
import React from 'react'
import { toast } from "react-toastify";
type propsTypePagination={
    page:number
    pageSize:number
    count:number
}

type propsType={
    setListLoading:(e:string)=>void
    routeName:string
    setPagination?:propsTypePagination
    isLog:boolean
    setData:(e:any)=>void
    notifType:string
    notifText:string
}


const useCallAPI:React.FC<propsType>=(props)=> {
    const CallApi=()=>{
        
        //@ts-ignore
        api[`${props.routeName}`]().then((res:any)=>{
            
        }).catch((err:any)=>{

        })
    }
  return CallApi()
}

export default useCallAPI