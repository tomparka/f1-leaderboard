import Card from './Card';

const CardList = ({ tracks }) => {
    const cardsArray = tracks.map(track => (
      <Card
        key={track.id}
        id={track.id}
        location={track.location}
        name={track.name} />
    ));
  
    return (
      <div style={{padding: '22px'}}>
        {cardsArray}
      </div>
    );
  };

  export default CardList;