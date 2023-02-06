import { GENTLEMENS } from "../../mocks/gentlemens";
import { Gentleman } from "../gentlemens/gentlements";

export function Info() {
  return (
    <ul className="gentlemen">
      {GENTLEMENS.map((item) => (
        <Gentleman
          id={item.id}
          name={item.name}
          status={item.status}
          profession={item.profession}
          twitter={item.twitter}
          picture={item.picture}
          alternativeText={item.alternativeText}
          selected={item.selected}
        ></Gentleman>
      ))}
    </ul>
  );
}