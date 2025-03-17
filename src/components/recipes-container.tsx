import RecipeCard from "./recipe-card";

export default function RecipesContainer() {
  const sampleRecipes = [
    {
      name: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
      name: "Chicken Alfredo",
      description:
        "Creamy pasta dish with grilled chicken, parmesan cheese, and Alfredo sauce.",
    },
    {
      name: "Beef Stroganoff",
      description:
        "Tender beef strips in a creamy mushroom sauce served over egg noodles.",
    },
    {
      name: "Vegetable Stir Fry",
      description:
        "A mix of fresh vegetables stir-fried with soy sauce and garlic.",
    },
    {
      name: "Chicken Tikka Masala",
      description:
        "Marinated chicken cooked in a creamy tomato sauce with Indian spices.",
    },
    {
      name: "Fish Tacos",
      description:
        "Grilled fish served in soft tortillas with fresh salsa and lime crema.",
    },
    {
      name: "Margherita Pizza",
      description:
        "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
    },
    {
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
    },
    {
      name: "Beef Tacos",
      description:
        "Seasoned ground beef served in crispy taco shells with lettuce and cheese.",
    },
    {
      name: "Shrimp Scampi",
      description:
        "Shrimp sautéed in garlic butter sauce served over linguine.",
    },
    {
      name: "Eggplant Parmesan",
      description:
        "Breaded eggplant slices baked with marinara sauce and mozzarella cheese.",
    },
    {
      name: "Chicken Fajitas",
      description:
        "Grilled chicken with bell peppers and onions served with tortillas.",
    },
    {
      name: "Lamb Curry",
      description: "Tender lamb cooked in a rich and spicy curry sauce.",
    },
    {
      name: "Vegetable Lasagna",
      description:
        "Layers of pasta, vegetables, ricotta, and marinara sauce baked to perfection.",
    },
    {
      name: "BBQ Ribs",
      description: "Slow-cooked ribs smothered in a tangy barbecue sauce.",
    },
    {
      name: "Greek Salad",
      description:
        "Fresh salad with tomatoes, cucumbers, olives, feta cheese, and Greek dressing.",
    },
    {
      name: "Pancakes",
      description: "Fluffy pancakes served with maple syrup and butter.",
    },
    {
      name: "Chicken Noodle Soup",
      description:
        "Comforting soup with chicken, noodles, and vegetables in a savory broth.",
    },
    {
      name: "Beef Burger",
      description:
        "Juicy beef patty served in a bun with lettuce, tomato, and cheese.",
    },
    {
      name: "Vegetable Curry",
      description: "A mix of vegetables cooked in a flavorful curry sauce.",
    },
    {
      name: "Grilled Cheese Sandwich",
      description: "Melted cheese between two slices of toasted bread.",
    },
    {
      name: "Chicken Caesar Wrap",
      description:
        "Grilled chicken, romaine lettuce, and Caesar dressing wrapped in a tortilla.",
    },
    {
      name: "Stuffed Bell Peppers",
      description:
        "Bell peppers stuffed with a mixture of rice, ground beef, and spices.",
    },
    {
      name: "Mushroom Risotto",
      description: "Creamy risotto with sautéed mushrooms and parmesan cheese.",
    },
    {
      name: "Chicken Quesadilla",
      description:
        "Grilled chicken and cheese folded in a tortilla and cooked until crispy.",
    },
    {
      name: "Beef Chili",
      description: "Hearty chili made with ground beef, beans, and spices.",
    },
    {
      name: "Caprese Salad",
      description:
        "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
    },
    {
      name: "Chicken Parmesan",
      description:
        "Breaded chicken breast topped with marinara sauce and mozzarella cheese.",
    },
    {
      name: "Vegetable Soup",
      description: "A mix of fresh vegetables simmered in a savory broth.",
    },
    {
      name: "Beef Stew",
      description:
        "Tender beef and vegetables cooked in a rich and hearty broth.",
    },
    {
      name: "Chicken Fried Rice",
      description: "Stir-fried rice with chicken, vegetables, and soy sauce.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8">
      {sampleRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.name}
          name={recipe.name}
          description={recipe.description}
        />
      ))}
    </div>
  );
}
