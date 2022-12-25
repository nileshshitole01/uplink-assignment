import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PayloadStateData, PAYLOAD_API_REQUEST } from "../../redux/slices/payloadSlice";
import DataTable from 'react-data-table-component';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { RootState } from '../../app/store';
import './style.scss';
import SearchBar from "../../components/searchbar";




const PayloadPage = () => {
    const dispatch = useDispatch();
    const PayloadsState = useSelector((state: RootState) => state.payloads);
    const [filteredData, setFilteredData] = useState<PayloadStateData[]>([]);

    const columns = [
        {
            name: 'Title',
            selector: (row: any) => row.payload_id,
        },
        {
            name: 'Payload Type',
            selector: (row: any) => row.payload_type
        },
        {
            name: 'Nationality',
            selector: (row: any) => row.nationality ? row.nationality : '-'
        },
        {
            name: 'orbit',
            selector: (row: any) => row.orbit ? row.orbit : '-'
        },
        {
            name: 'Reused',
            selector: (row: any) => row.reused ? 'Yes' : 'No'
        }
    ];

    const onSearch = (searchText: string) => {
        let AllData = [...PayloadsState.data];

        let filteredData = AllData.filter((item) => {
            if (searchText === "") {
              return item;
            } else if (
              item.payload_id.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return item;
            }
        });
        

        setFilteredData(filteredData);
    }

    useEffect(() => {
      dispatch(PAYLOAD_API_REQUEST());
    }, []);

    useEffect(() => {
        if (PayloadsState && PayloadsState.data && PayloadsState.data.length) {
            let tempData = [...PayloadsState.data]
            setFilteredData(tempData);
        }
      }, [PayloadsState]);

    return(
        <div className="payloads-container">
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

export default PayloadPage;