import { Data } from "@angular/router";

export interface News{
  id: number,
  title: string,
  category: string,
  img: any,
  autor: string,
  text: string,
  time?: Data | string,
  status: boolean,
  email: string
}
export interface User{
  name: string,
  email: string,
  password: string,
}