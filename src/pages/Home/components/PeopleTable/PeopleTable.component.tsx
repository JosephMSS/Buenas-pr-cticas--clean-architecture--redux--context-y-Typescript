import { Person } from "@/models";
import { addFavorites } from "@/redux";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface PeopleTable { }

export const PeopleTable: React.FC<PeopleTable> = () => {
  const pageSize = 5;
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const dispatch = useDispatch()

  const peopleStore = useSelector((store: AppStore) => store.people)
  const favoriteStore = useSelector((store: AppStore) => store.favorites)

  const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
  const filterPerson = (person: Person) => favoriteStore.filter(p => p.id !== person.id)

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]

    dispatch(addFavorites(filteredPeople))

    setSelectedPeople(filteredPeople);
  }

  useEffect(() => {

    setSelectedPeople(favoriteStore)

  }, [favoriteStore])

  const columns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />}</>
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
      rows={peopleStore}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};
