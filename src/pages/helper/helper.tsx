import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { HelperItemInterface, SortConfig } from "./helper.ts";
import { useDataModifiers } from "./useDataModifiers";
import imgPath from '../../assets/user_default_pic.webp';

const path = import.meta.env.VITE_API_LOCATION;

export const Helper: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortConfig, setSortConfig] = useState<SortConfig | undefined>({
        property: 'views',
        direction: -1,
        type: 'number'
    });
    const [helperitems, setHelperItems] = useState<HelperItemInterface[]>([]);
    const itemsPerPage = 6;

    const {
        dataCurrentPage,
        goToPage,
        goToNextPage,
        goToPrevPage,
        totalPages,
        page,
        dataLength,
    } = useDataModifiers<HelperItemInterface>(helperitems, itemsPerPage, sortConfig, {
        param: 'subject',
        query: searchQuery
    });
    useEffect(() => {
        const fetchData = async () => {
            const storedData = localStorage.getItem("allissues");
            if (storedData) {
                console.log("Data found in localStorage, loading from localStorage...");
                console.log(JSON.parse(storedData))
                setHelperItems(JSON.parse(storedData));
            } else {
                console.log("No data in localStorage, fetching from API...");
                try {
                    const response = await fetch(`${path}/issue/all`);
                    if (response.ok) {
                        const { data } = await response.json();
                        const first40Items = data.slice(0, 40);
                        console.log("Data fetched from API:", first40Items);
                        setHelperItems(first40Items);
                        localStorage.setItem("allissues", JSON.stringify(first40Items));
                    } else {
                        console.error("API request failed with status:", response.status);
                    }
                } catch (error) {
                    console.error("Error fetching data from API:", error);
                }
            }
        };

        fetchData();
    }, []);

    const handleSortChange = (property: string, type: 'date' | 'number' | 'string') => {
        setSortConfig(() => ({
            property,
            direction: -1,
            type,
        }));
        goToPage(1);
    };

    return (
        <div className="helper">
            <div className="helper__modifiers">
                <div>
                    <button
                        onClick={() => handleSortChange('views', 'number')}
                        className={sortConfig?.property === 'views' ? 'active' : ''}
                    >
                        Hot
                    </button> |
                    <button
                        onClick={() => handleSortChange('created_at', 'date')}
                        className={sortConfig?.property === 'created_at' ? 'active' : ''}
                    >
                        Newest to Oldest
                    </button> |
                    <button
                        onClick={() => handleSortChange('votes', 'number')}
                        className={sortConfig?.property === 'votes' ? 'active' : ''}
                    >
                        Most Votes
                    </button>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            goToPage(1);
                        }}
                    />
                    <button>New +</button>
                </div>
            </div>
            <div className="helper__list">
                {dataCurrentPage.map((item: HelperItemInterface) => (
                    <NavLink to={`/help/${item.id}`} key={item.id} className="helper__list__item">
                        <div className="helper__list__item__userpic">
                            <div>
                                <img src={imgPath} alt="user profile pic" />
                            </div>
                        </div>
                        <div className="helper__list__item__userinfo">
                            <div>
                                <strong>{item.subject}</strong> 
                            </div>
                            <div>
                                <em>{item.author.name} - {new Date(item.created_at).toLocaleString()}</em>
                            </div>
                        </div>
                        <div className="helper__list__item__userstats">
                            <div>Votes: {item.votes}</div>
                            <div>Views: {item.views}</div>
                        </div>
                    </NavLink>
                ))}
            </div>
            <div className="pagination">
                <button onClick={goToPrevPage} disabled={page === 1}>Prev</button>
                <span>Page {page} of {totalPages}</span>
                <button onClick={goToNextPage} disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
};
