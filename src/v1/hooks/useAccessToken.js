import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, userProfile } from "../store/mainSlice";

export default function useAccessToken () {
    const accessToken = useSelector((state) => state.main.accessToken)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!accessToken) {
            let localAccessToken = localStorage.getItem('accessToken')
            if (localAccessToken) {
                dispatch(userProfile({ accessToken: localAccessToken })).then(result => {
                    const response = result.payload
                    if (response.status) dispatch(setAccessToken({accessToken: localAccessToken}))
                })
            }
        } else {
            dispatch(userProfile({ accessToken: accessToken })).then(result => {
                const response = result.payload
                if (!response.status) dispatch(setAccessToken({accessToken: null}))
            })
        }
    }, [])
    return accessToken
}