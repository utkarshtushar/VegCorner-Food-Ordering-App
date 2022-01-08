import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Veg-Food, Delivered To You</h2>
      <p>
        If you are Vegetarian, this is Right place for you.
      </p>
      <p>
        All our meals are 100% Veg and cooked with high-quality Veg-ingredients, by experienced Chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
