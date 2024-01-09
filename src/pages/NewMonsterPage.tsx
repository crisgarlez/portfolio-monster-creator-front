import { useAppDispatch } from "../app/hooks";
import { incuvate } from "../reducers/monsters/monsters.actions";

function NewMonsterPage() {
  const dispatch = useAppDispatch();

  const handleStartBattleClick = async () => {
    await dispatch(
      incuvate({
        id: null,
        name: "string",
        attack: 1,
        defense: 2,
        hp: 3,
        speed: 4,
        imageUrl: "string",
        code: null,
        typeCode: "25ddfc75-a1d7-4e0a-b95b-1f0b30f7989c",
        incubationTime: 0,
        status: null,
      })
    );
  };

  return (
    <>
      <button onClick={handleStartBattleClick}>Crear</button>
    </>
  );
}

export default NewMonsterPage;
