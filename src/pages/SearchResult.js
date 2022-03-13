import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useSearchResultFetch from "../Hooks/useSearchResultFetch";
import { Card1, Grid } from "../Styles/Container.styled";
import { Img } from "../Styles/Element.styled";

export default function SearchResult() {
  const pram = useParams();
  const { loading, error, result } = useSearchResultFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${pram.type}&number=16`,
    pram.type
  );
  console.log("Search Page");

  return (
    <Grid>
      {loading && <Loading />}
      {error && <div>Error ....</div>}
      {!loading &&
        !error &&
        result !== null &&
        result.results.length > 0 &&
        result.results.map((recipe) => (
          <Link key={recipe.id} to={`/recipe-ditiels/${recipe.id}`}>
            <Card1>
              <Img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title} </h4>
            </Card1>
          </Link>
        ))}
      {!loading && !error && result !== null && result.results.length === 0 && (
        <Card1>
          <h4>No Result</h4>
        </Card1>
      )}
    </Grid>
  );
}
