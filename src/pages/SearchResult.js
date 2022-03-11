import { useParams } from "react-router-dom";
import useSearchResultFetch from "../Hooks/useSearchResultFetch";
import { Card1, Grid } from "../Styles/Container.styled";
import { Img } from "../Styles/Element.styled";

export default function SearchResult() {
  const pram = useParams();
  const { loading, error, result } = useSearchResultFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${pram.type}&number=16`,
    pram.type
  );
  return (
    <Grid>
      {loading && <div>Loading ....</div>}
      {error && <div>Error ....</div>}
      {!loading &&
        !error &&
        result !== null &&
        result.results.length > 0 &&
        result.results.map((recipe) => (
          <Card1 key={recipe.id}>
            <Img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title} </h4>
          </Card1>
        ))}
      {!loading && !error && result !== null && result.results.length === 0 && (
        <Card1>
          <h4>No Result</h4>
        </Card1>
      )}
    </Grid>
  );
}
