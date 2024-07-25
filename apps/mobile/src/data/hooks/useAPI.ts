import { useCallback } from 'react'

const URL_BASE = 'http://192.168.0.112:3001' // process.env.URL_BASE

export default function useAPI() {
    console.log('URL_BASE', URL_BASE)
    const httpGet = useCallback(async function (uri: string): Promise<any> {
        
    try {
        const res = await fetch(`${URL_BASE}/${uri}`)
        const data = await res.json()
        return data
    } catch(error) {
        console.log(error, "TESTE")
    }
    }, [])

    const httpPost = useCallback(async function (uri: string, body: any): Promise<any> {
        try {
            await fetch(`${URL_BASE}/${uri}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
        } catch(error) {
            console.log(error, "TESTE")
        }
    }, [])

    return { httpGet, httpPost }
}
