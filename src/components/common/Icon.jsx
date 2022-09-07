import Icons from 'icons/icons.svg';

export const Icon = ({ name, size }) => {
  return (
    <svg width={size} height={size}>
      <use href={Icons + `#${name}`} />
    </svg>
  )
};