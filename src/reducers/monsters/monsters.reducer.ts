import { createReducer } from "@reduxjs/toolkit";
import { Monster } from "../../models/monster.interface";
import { fetchMonstersData, incuvate } from "./monsters.actions";

interface MonsterState {
  monster: Monster | null;
  monsters: Monster[];
}

const initialState: MonsterState = {
  monster: null,
  monsters: [],
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(incuvate.fulfilled, (state, action) => ({
    ...state,
    monster: action.payload,
  }));
});
