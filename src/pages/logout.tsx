import React, { useEffect } from "react";
import { useApiDispatch, useApiSelector } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { selectSession, setSession } from "../redux/slices/session";

export function Logout() {
    const navigate = useNavigate();
    const dispatch = useApiDispatch();
    const session = useApiSelector(selectSession);

	useEffect(() => {
		if(session)
		{
			localStorage.removeItem('sso_token');
			dispatch(setSession(null));
			navigate(0);
		} else {
			navigate('/');
		}
	}, []);

    return <></>
}