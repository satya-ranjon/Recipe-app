import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useRacipeDitielsFetch from "../Hooks/useRacipeDitielsFetch";
import { DitielsWrapper, Info } from "../Styles/Container.styled";
import { Button } from "../Styles/Element.styled";

function RacipeDitiels() {
  const { recipeID } = useParams();
  const [active, setActive] = useState("instructions");

  const { loading, error, result } = useRacipeDitielsFetch(
    `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
    recipeID
  );

  console.log("Racipe Ditiels Page");

  return (
    <DitielsWrapper>
      {loading && <Loading />}
      {error && <div>Error ....</div>}
      {result !== null && (
        <>
          <div>
            <h2>{result.title}</h2>
            <img src={result.image} alt={result.title} />
          </div>
          <Info>
            <Button
              className={active === "instructions" ? "active" : null}
              onClick={() => setActive(() => "instructions")}
            >
              instructions
            </Button>
            <Button
              className={active === "ingredients" ? "active" : null}
              onClick={() => setActive(() => "ingredients")}
            >
              Ingredients
            </Button>
            {active === "instructions" ? (
              <div>
                <p dangerouslySetInnerHTML={{ __html: result.summary }}></p>
                <p
                  dangerouslySetInnerHTML={{ __html: result.instructions }}
                ></p>
              </div>
            ) : (
              <ul>
                {result.extendedIngredients.map((ingredint) => (
                  <li key={ingredint.id}>{ingredint.original}</li>
                ))}
              </ul>
            )}
          </Info>
        </>
      )}
    </DitielsWrapper>
  );
}

export default RacipeDitiels;
