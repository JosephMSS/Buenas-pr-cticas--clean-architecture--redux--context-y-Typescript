import { Person } from "@/models";
import { addFavorites, removeFavorites } from "@/redux";
import { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

export interface FavoriteTableInterface { }
export const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
    const pageSize = 5;
    const dispatch = useDispatch()
    const favoritesStore = useSelector((store: AppStore) => store.favorites)
    const handleClick = (person: Person) => {
        dispatch(removeFavorites(person));
    }
    const columns: GridColDef[] = [
        {
            field: 'actions',
            type: 'actions',
            sortable: false,
            headerName: '',
            width: 50,
            renderCell: (params: GridRenderCellParams) => (
                <>{<IconButton color="secondary" aria-label="favorite" component="label" onClick={() => handleClick(params.row)}>
                    <DeleteIcon />
                </IconButton>}</>
            )
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'category',
            headerName: 'Categories',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'company',
            headerName: 'Company',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'levelOfHappiness',
            headerName: 'Level of happiness',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        }
    ];
    return (
        <DataGrid
            rows={favoritesStore}
            columns={columns}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={pageSize}
            rowsPerPageOptions={[pageSize]}
            getRowId={(row: any) => row.id}
        />
    );
}