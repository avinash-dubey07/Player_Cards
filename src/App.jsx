import BasketballPlayerCard from "./Component/BasketballPlayerCard";
import "./App.css";

const players = [
  {
    name: "LeBron James",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.2,
      reboundsPerGame: 10.5,
    },
  },
  {
    name: "Michael Jordan",
    image:
      "https://w0.peakpx.com/wallpaper/729/663/HD-wallpaper-michael-jordan-basketball-chicago.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 30.1,
      assistsPerGame: 5.3,
      reboundsPerGame: 6.2,
    },
  },
  {
    name: "Magic Johnson",
    image:
      "https://wallpapers.com/images/featured/magic-johnson-pictures-4i9d3kzvdep45476.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 19.5,
      assistsPerGame: 11.2,
      reboundsPerGame: 7.2,
    },
  },
  {
    name: "Wilt Chamberlain",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Wilt_Chamberlain3.jpg/800px-Wilt_Chamberlain3.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 19.5,
      assistsPerGame: 11.2,
      reboundsPerGame: 7.2,
    },
  },
];

function App() {
  return (
    <>
      <div className="Heading">
        <h1>NBA HALL OF LEGENDS</h1>
      </div>
      <div className="Player_Cards">
        {players.map((player, index) => (
          <BasketballPlayerCard
            key={index}
            name={player.name}
            image={player.image}
            position={player.position}
            stats={player.stats}
          />
        ))}
      </div>
    </>
  );
}

export default App;
