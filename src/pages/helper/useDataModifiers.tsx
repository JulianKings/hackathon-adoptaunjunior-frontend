import { useState, useMemo } from 'react';
import { SortConfig, SearchConfig, UseDataModifiersReturn } from './helper.ts';

const getNestedProperty = (obj: any, propertyPath: string | undefined): any => {
  if (propertyPath === undefined) return;
  return propertyPath.split('.').reduce((acc, part) => acc && acc[part], obj);
};
export const useDataModifiers = <T,>(
  items: any[],
  itemsPerPage: number,
  sortConfig?: SortConfig,
  searchConfig?: SearchConfig,
): UseDataModifiersReturn<T> => {
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