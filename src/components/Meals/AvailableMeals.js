import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Dal-Tadka',
    description: 'Famous NorthIndian Dish',
    price: 110.00,
  },
  {
    id: 'm2',
    name: 'Mix Veg',
    description: 'Most Selling Item',
    price: 125.50,
  },
  {
    id: 'm3',
    name: 'Litti-Chokha',
    description: 'Bihar Speciality!',
    price: 12.50,
  },
  {
    id: 'm4',
    name: 'Chapati',
    description: 'Regular',
    price: 10.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
