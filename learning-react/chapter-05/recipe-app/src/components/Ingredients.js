const Ingredients = ({ amout, measurement, name}) =>
    <li>
        <span className="amount">{amout}</span>
        <span className="measurement">{measurement}</span>
        <span className="name">{name}</span>
    </li>

export default Ingredients;