import usePeople from "./hooks/usePeople";

export default function PeopleList() {
  const { people, addPerson } = usePeople();

  return (
    <>
      <ul>
        {people.map((pereson) => (
          <li>{pereson}</li>
        ))}
      </ul>
      <button onClick={() => addPerson("Mario")}>adicionar pessoas</button>
    </>
  );
}
