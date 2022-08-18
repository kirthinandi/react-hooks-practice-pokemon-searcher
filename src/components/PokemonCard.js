import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({hp, name, sprites, id}) {
  const [isFront, setIsFront] = useState(true)
  
  function handleClick(e) {
    setIsFront(!isFront)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={isFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
