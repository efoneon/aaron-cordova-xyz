export function Arrow({
  size = 24,
  color = 'gray',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" fill={color} />
    </svg>
  );
}
