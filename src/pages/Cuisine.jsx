import React from "react";
import { Link, useParams } from "react-router-dom";
import useCuisineFetch from "../Hooks/useCuisineFetch";
import { Card1, Grid } from "../Styles/Container.styled";
import { Img } from "../Styles/Element.styled";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "../components/Loading";

export default function Cuisine() {
  const pram = useParams();
  const { loading, error, result } = useCuisineFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${pram.type}&number=16`,
    pram.type
  );

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Grid>
          {loading && <Loading />}
          {error && <div>Error ....</div>}
          {!loading &&
            !error &&
            result !== null &&
            result.results.map((recipe) => (
              <Link key={recipe.id} to={`/recipe-ditiels/${recipe.id}`}>
                <Card1>
                  <Img src={recipe.image} alt={recipe.title} />
                  <h4>{recipe.title} </h4>
                </Card1>
              </Link>
            ))}
        </Grid>
      </motion.div>
    </AnimatePresence>
  );
}
