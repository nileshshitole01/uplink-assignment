import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistoryStateData, HISTORY_REQUEST } from "../../redux/slices/historySlice";
import DataTable from 'react-data-table-component';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { RootState } from '../../app/store'
import SearchBar from "../../components/searchbar";
import './style.scss';



const HistoryPage = () => {
    const dispatch = useDispatch();
    const historyState = useSelector((state: RootState) => state.history);
    const [filteredData, setFilteredData] = useState<HistoryStateData[]>([]);
    

    const columns = [
        {
            name: 'Title',
            selector: (row: any) => row.title,
        },
        {
            name: 'Date',
            selector: (row: any) => new Date(row.event_date_unix).toDateString()
        },
        {
            name: 'Flight No',
            selector: (row: any) => row.flight_number ? row.flight_number : '-'
        }
    ];

    const onSearch = (searchText: string) => {
        let AllData = [...historyState.data];

        let filteredData = AllData.filter((item) => {
            if (searchText === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return item;
            }
        });

        setFilteredData(filteredData);
    };

    useEffect(() => {
      dispatch(HISTORY_REQUEST());
    }, []);

    useEffect(() => {
        if (historyState && historyState.data && historyState.data.length) {
            let tempData = [...historyState.data]
            setFilteredData(tempData);
        }
      }, [historyState]);

    return(
        <div className="history-container">
            <Card>
                <div className="search-view">
                    <SearchBar onSearch={(text) => {onSearch(text)}} />
                </div>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={filteredData}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="395px"
                    />
                </CardContent>
            </Card>
        </div>
    )
};

export default HistoryPage;