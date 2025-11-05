import "./pokemon_card.css";

function PokemonCard(props) {
    const { name, image, types } = props;

    const typeList = Array.isArray(types) ? types : [];

    const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

    return (
        <div className="pokemon-card">
            <img src={image} alt={name} className="pokemon-image" />
            <h2 className="pokemon-name">{capitalize(name)}</h2>

            <div className="pokemon-types">
                {typeList.length > 0 ? (
                    typeList.map((t) => (
                        <span className="type-badge" key={t}>{capitalize(t)}</span>
                    ))
                ) : (
                    <span className="type-badge empty">Unknown</span>
                )}
            </div>
        </div>
    );
}

export default PokemonCard;