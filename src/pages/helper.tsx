import { NavLink } from "react-router-dom";
import React, { useMemo, useState } from 'react';

interface Item {
    id: number;
    username: string;
    title: string;
    tags: string[];
    created_at: string;
    votes: number;
    views: number;
}

const data: Item[] = [
    {
        id: 1,
        username: "witchy_coder",
        title: "Spooky Sorting Algorithms",
        tags: ["algorithms", "sorting", "Halloween Challenge"],
        created_at: "2024-10-20T00:00:00Z",
        votes: 5,
        views: 300
    },
    {
        id: 2,
        username: "ghostly_dev",
        title: "Haunted Binary Tree Traversal",
        tags: ["trees", "binary tree", "Halloween Challenge"],
        created_at: "2024-10-19T19:00:00Z",
        votes: 2,
        views: 150
    },
    {
        id: 3,
        username: "frankenstein_code",
        title: "Zombie Apocalypse Survival Simulation",
        tags: ["simulation", "survival", "Halloween Challenge"],
        created_at: "2024-10-18T15:30:00Z",
        votes: 8,
        views: 450
    },
    {
        id: 4,
        username: "batman_developer",
        title: "Witch's Brew: Recipe API",
        tags: ["API", "recipe", "Halloween Challenge"],
        created_at: "2024-10-17T11:00:00Z",
        votes: 1,
        views: 200
    },
    {
        id: 5,
        username: "pumpkin_master",
        title: "Creepy Code Review",
        tags: ["review", "coding", "Halloween Challenge"],
        created_at: "2024-10-16T09:15:00Z",
        votes: 3,
        views: 350
    }
];

type SortConfig = {
    type: 'date' | 'number' | 'string';
    property: string;
    direction: -1 | 1;
} | null | undefined;

type SearchConfig = {
    query: string;
    param?: string | undefined;
} | null | undefined;

const getNestedProperty = (obj: any, propertyPath: string | undefined): any => {
    if (propertyPath === undefined) return;
    return propertyPath.split('.').reduce((acc, part) => acc && acc[part], obj);
};

interface UseTableModifiersReturn<T> {
    dataCurrentPage: T[];
    goToPage: (pageNumber: number) => void;
    goToNextPage: () => void;
    goToPrevPage: () => void;
    totalPages: number;
    page: number;
    dataLength: number;
}

const useDataModifiers = <T,>(
    items: any[],
    itemsPerPage: number,
    sortConfig?: SortConfig,
    searchConfig?: SearchConfig,
): UseTableModifiersReturn<T> => {
    const [page, setPage] = useState<number>(1);

    const { dataCurrentPage, totalPages, dataLength } = useMemo(() => {
        if (!items) return { dataCurrentPage: [], totalPages: 0, dataLength: 0 };

        const sortedData = sortConfig
            ? [...items].sort((a, b) => {
                const valueA = getNestedProperty(a, sortConfig.property);
                const valueB = getNestedProperty(b, sortConfig.property);

                if (sortConfig.type === 'date') {
                    const dateA = new Date(valueA);
                    const dateB = new Date(valueB);
                    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
                        return 0;
                    }
                    return (dateA.getTime() - dateB.getTime()) * sortConfig.direction;
                } else if (sortConfig.type === 'number') {
                    return (Number(valueA) - Number(valueB)) * sortConfig.direction;
                } else if (sortConfig.type === 'string') {
                    return (valueA.localeCompare(valueB)) * sortConfig.direction;
                }
                return 0;
            })
            : items;

        const searchedData = searchConfig && searchConfig.param && searchConfig.param.trim() !== ""
            ? sortedData.filter(item => {
                const searchValue = getNestedProperty(item, searchConfig.param)?.toString().toLowerCase();
                return searchValue && searchValue.includes(searchConfig.query.toLowerCase());
            })
            : sortedData;

        const dataLength = searchedData.length;
        const totalPages = Math.ceil(dataLength / itemsPerPage);

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const dataCurrentPage = searchedData.slice(startIndex, endIndex);

        return { dataCurrentPage, totalPages, dataLength };
    }, [items, sortConfig, itemsPerPage, page, searchConfig]);

    const goToPage = (pageNumber: number) => {
        setPage(pageNumber);
    };

    const goToNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const goToPrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    if (!items) {
        return {
            dataCurrentPage: [],
            goToPage: () => { },
            goToNextPage: () => { },
            goToPrevPage: () => { },
            totalPages: 0,
            page: 0,
            dataLength: 0,
        };
    }

    return {
        dataCurrentPage,
        goToPage,
        goToNextPage,
        goToPrevPage,
        totalPages,
        page,
        dataLength,
    };
};

export const Helper: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortConfig, setSortConfig] = useState<SortConfig | undefined>({
        property: 'views',
        direction: -1,
        type: 'number'
    });

    const itemsPerPage = 3;
    const {
        dataCurrentPage,
        goToPage,
        goToNextPage,
        goToPrevPage,
        totalPages,
        page,
        dataLength,
    } = useDataModifiers<Item>(data, itemsPerPage, sortConfig, {
        param: 'title',
        query: searchQuery
    });

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
            <h2>Help Page</h2>
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
                {dataCurrentPage.map((item: Item) => (
                    <NavLink to={`/help/${item.id}`} key={item.id} className="helper__list__item">
                        <div className="helper__list__item__userpic">
                            <div>
                                <img src="src/assets/user_default_pic.webp" alt="user profile pic" />
                            </div>
                        </div>
                        <div className="helper__list__item__userinfo">
                            <div>
                                <strong>{item.title}</strong> <span>({item.tags.join(', ')})</span>
                            </div>
                            <div>
                                <em>{item.username} - {new Date(item.created_at).toLocaleString()}</em>
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
