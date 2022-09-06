import Icons from 'icons/icons.svg';

export const Icon = ({ name, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={Icons + `#${name}`} />
    </svg>
  )
};