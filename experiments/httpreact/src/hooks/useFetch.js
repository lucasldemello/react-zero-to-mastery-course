import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - POST refactor
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (data, method = false) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();

            setData(json);
        };

        fetchData();
    }, [url, callFetch]);

    // 5 - POST refactor
    useEffect(() => {
        const postData = async () => {
            if (config && method === "POST") {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        }; 

        postData();
    }, [config, method, url]);

    return { data, httpConfig };
}