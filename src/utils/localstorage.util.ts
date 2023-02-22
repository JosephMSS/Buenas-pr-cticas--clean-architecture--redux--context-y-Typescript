import { LocalStorageTypes } from "@/models";

export const setLocalStorage = (key: LocalStorageTypes, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  export const getLocalStorage = (key: LocalStorageTypes) => {
    return localStorage.getItem(key);
  };