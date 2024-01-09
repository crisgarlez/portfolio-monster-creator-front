import { Monster } from "../../models/monster.interface";

const API_URL = "http://localhost:3005";

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const incuvate = async (monster: Monster): Promise<Monster> => {
  const newMonster = await fetch(`${API_URL}/monsters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(monster),
  }).then((response) => response.json());
  return newMonster;
};

export const MonstersService = {
  incuvate,
  getAll,
};
