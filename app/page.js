import Header from './components/Header';
import NamesList from './components/NamesList';
import LikeButton from './like-button';

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <NamesList items={names} />
      <LikeButton />
    </div>
  );
}

