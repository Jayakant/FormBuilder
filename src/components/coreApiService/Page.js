import React from "react";
import { getData, postData } from "./services";
import { Url } from "./config";
import axios from "axios";
// import { createProxyMiddleware } from "http-proxy-middleware";

export default function Page() {

    const [data, setData] = React.useState({});

    // function GetData() {
    //     getData(Url).then((res) => {
    //         setData(res)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

    // GetData()

    function PostData(body) {
        postData(Url, body).then((res) => {
            // setData(res)
            console.log(res)
        }).catch((er) => {
            console.log(er)
        })
    }

    let headerBody = { username: "jayakant", password: "Welcome123$" }

    // React.useEffect(()=>{PostData(headerBody)},[])

    // const { createProxyMiddleware } = require('http-proxy-middleware');

    const postt = async () => {
        try {
            const rep = await axios.post(Url,
                {
                    username: "jayakant",
                    password: "Welcome123$",
                },
                // {
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Access-Control-Allow-Origin': "*",
                //     }
                // },
            );
            console.log(rep);
        }
        catch (err) {
            console.log(err)
        }
    }


    return (<>
        {/* <ul>
            {data.map(item => (<li key={item.id}>{item.title}</li>))}
        </ul> */}
        <button onClick={postt}>click</button>
    </>)
}