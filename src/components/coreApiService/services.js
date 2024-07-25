import axios from "axios"
import { rootUrl } from "./config";
// import { useAuth } from '../Auth';

export const getData = async (url, body, head) => {
    // console.log(head)
    try {
        const response = await axios.get(rootUrl + url, body, { headers: head });
        return response
    }
    catch (err) {
        return (err)
    }
}

export const postData = async (url, body, head) => {
    try {
        const response = await axios.post(rootUrl + url, body, {
            headers: head
        });
        return response
    }
    catch (err) {
        return (err)
    }
}

export const putData = async (url, body, head) => {
    try {
        const response = await axios.put(rootUrl + url, body, {
            headers: head
        })
        return response
    } catch (err) {
        return (err)
    }
}

export const deleteData = async (url, head) => {
    try {
        const response = await axios.delete(rootUrl + url, {
            headers: head
        });
        return response
    } catch (err) {
        return (err)
    }
}