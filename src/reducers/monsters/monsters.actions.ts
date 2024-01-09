import { createAsyncThunk } from "@reduxjs/toolkit";
import { Monster } from "../../models/monster.interface";
import { MonstersService } from "./monsters.service";

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  "monsters/fetchMonstersData",
  MonstersService.getAll
);

export const incuvate = createAsyncThunk(
  "monsters/incuvate",
  async (payload: any) => {
    return await MonstersService.incuvate(payload);
  }
);
