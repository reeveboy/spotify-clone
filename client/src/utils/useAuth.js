import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useAuth = (code) => {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiressIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiressIn(res.data.expiresIn)
                window.history.pushState({}, null, "/")
            })
            .catch(() => {
                window.location = '/'
            })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios.post('http://localhost:3001/refresh', {
                refreshToken,
            })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiressIn(res.data.expiresIn)
                })
                .catch(() => {
                    window.location = '/'
                })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])

    return accessToken
}
