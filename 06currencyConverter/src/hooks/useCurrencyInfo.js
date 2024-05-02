import {useEffect, useState} from "react";

function useCurrencyInfo(currency){
    useEffect(()=> {
        const [data, setData] = useState({})
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    console.log("data: ",data)
    return data;
}

export default useCurrencyInfo;