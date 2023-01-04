export default function capitalizeFirstLetter(word: string) {
  const first = word[0];
  const rest = word.slice(1);

  return first ? `${first.toUpperCase()}${rest}` : '';
}
