import React, { useEffect } from "react";
import { SingleResource } from "../components/resources/SingleResource";
import { ApiResourceInterface } from "../interfaces/resource";
import { useApiDispatch, useApiSelector } from "../redux/store";
import { fetchResources, selectResources, selectResourceStatus } from "../redux/slices/resources";
import { CircularProgress } from "@mui/material";



export function Resources() {

    const resources: ApiResourceInterface[] | null = useApiSelector(selectResources);
    const fetchStatus: (string | null) = useApiSelector(selectResourceStatus);
    const dispatch = useApiDispatch();

    useEffect(() => {
		if(!fetchStatus || !resources || fetchStatus === 'fulfilled')
		{
			dispatch(fetchResources(1));
		}
	}, []);

    return ((fetchStatus !== 'fulfilled' || !resources) ? <div className="resources"><CircularProgress /></div> :
        <div className="resources">
            <h1 className="resources__title">Tratos</h1>
            <div className="resources__grid">
                {resources.map((resource, index) => (
                    <SingleResource
                        id={resource.id}
                        created_at={resource.created_at}
                        updated_at={resource.updated_at}
                        title={resource.title}
                        description={resource.description}
                        content={resource.content}
                        published={resource.published}
                        type={resource.type}
                        url={resource.url}
                        image={resource.image}
                    />
                ))}
            </div>
        </div>
    );
}   