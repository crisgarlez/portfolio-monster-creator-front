import { RootState } from "../../app/store";

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectMonster = (state: RootState) => state.monsters.monster;
