interface BoxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  className?: string;
  children: React.ReactNode;
}

export default function BoxGroup({
  children,
  className = '',
  direction = 'row',
  ...props
}: BoxGroupProps) {
  const directionStyle = {
    row: 'flex-row space-x-4',
    column: 'flex-col space-y-4',
  }[direction];

  return (
    <div className={`flex ${directionStyle} ${className}`} {...props}>
      {children}
    </div>
  );
}
