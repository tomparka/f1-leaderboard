import AustraliaLogo from '/Users/tomek/projects/react/f1-leaderboard/src/trackSVGs/australia.svg';

function Card(track) {
    return (
        <div style={{border: '2px solid'}} >
            <img alt="photo" src={AustraliaLogo} height={100} />
            <div>
                <h2>{track.location}</h2>
                <p>{track.name}</p>
            </div>
        </div>);
}

export default Card;