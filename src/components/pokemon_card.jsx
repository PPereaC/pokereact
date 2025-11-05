import "./pokemon_card.css";

function PokemonCard(props) {

    return (
        
        // Card Pokemon con la imagen, nombre y tipos llamado PokemonCard
        <div className="pokemon-card">
            <img src={props.image} alt={props.name} className="pokemon-image" />
            <h2 className="pokemon-name">{props.name}</h2>
            <div className="pokemon-types">
                {props.types.map((type) => (
                    <span key={type} className={`pokemon-type ${type}`}>
                        {type}
                    </span>
                ))}
            </div>
        </div>
        

    );

}

export default PokemonCard;