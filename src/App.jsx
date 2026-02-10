import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

function App() {
  const profiles = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShA5sFF5PJ_cn76Z1ADejTTi5WnhP0V7GKcQ&s',
      name: 'David',
      description: 'Hello im David',
      status: 'friend',
      color: 'red',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0e3U2swqgGmBd7IGscNiZD8ZlzaRIl7PKOg&s',
      name: 'Moty',
      description: 'Hello im Moty',
      status: 'student',
      color: 'blue',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUHeN05j-Z3jowlzdDVgYIBwKBUjvrpvmZg&s',
      name: 'Meshulam',
      description: 'Hello im Meshulam',
      status: 'Teacher',
      color: 'green',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjI5wA2Bicywc3qEw-LOCSwbKz0eDDkEpXg&s',
      name: 'Ari',
      description: 'Hello im Ari',
      status: 'friend',
      color: 'red',
    },
  ];
  return (
    <>
      <Header />
      <div className="card-container">
        {profiles.map((profile) => (
          <Card
            src={profile.src}
            name={profile.name}
            description={profile.description}
            status={profile.status}
            color={profile.color}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
