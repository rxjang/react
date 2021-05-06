// 조리법 객체의 배열
const data = [
    {
        name: "Baked Salmon",
        ingredients: [
            { name: "Salmon", amount: 1, measurement: "l lb" },
            { name: "Pine Nuts", amount: 1, measurement: "cup" },
            { name: "Butter Lettuce", amount: 2, measurement: "cups" },
            { name: "Yellow Squash", amount: 1, measurement: "med" },
            { name: "Olive Oil", amount: 0.5, measurement: "cup" },
            { name: "Garlic", amount: 3, measurement: "cloves" },
        ],
        steps: [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Add the yellow squash and put back in the oven for 30 mins.",
            "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
        ],
        },
        {
        name: "Fish Tacos",
        ingredients: [
            { name: "Whitefish", amount: 1, measurement: "l lb" },
            { name: "Cheese", amount: 1, measurement: "cup" },
            { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
            { name: "Tomatoes", amount: 2, measurement: "large" },
            { name: "Tortillas", amount: 3, measurement: "med" },
        ],
        steps: [
            "Cook the fish on the grill until hot.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese",
        ],
    },
]

//조리법 하나를 표현하는 상태가 없는 함수형 컴포넌트
const Recipe = ({name, ingredients, steps}) => 
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredinet, i) => 
                <li key={i}>{ingredinet.name}</li>
            )}
        </ul>
        <section className="instructions">
            <h2>조리 절차</h2>
            {steps.map((step, i) =>
                <p key={i}>{step}</p>
            )}
        </section>
    </section>

// 조리법으로 이루어진 메뉴를 표현하는 상태가 없는 함수형 컴포넌트
const Menu = ({title, recipes}) => 
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) => 
                <Recipe key={i} {...recipe} />
            )}
        </div>
    </article>


// ReactDOM.render을 호출해서 Menu를 현재 DOM에 랜더링 한다. 
ReactDOM.render(
    <Menu recipes={data} title="Delicious Recipes" />,
    document.getElementById("react-container")
)