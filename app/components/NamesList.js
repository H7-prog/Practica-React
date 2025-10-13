export default function NamesList({ items }) {
  return (
    <ul>
      {items.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
