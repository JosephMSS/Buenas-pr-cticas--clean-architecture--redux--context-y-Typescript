import { People } from "@/data";
import { addPeople } from "@/redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PeopleTable } from "./components";

export interface HomeInterface { }

export const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPeople(People))
  }, [])
  return <PeopleTable />
};
