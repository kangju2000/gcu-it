interface FlexCenterProps {
  children: React.ReactNode;
  className?: string;
}

export default function FlexCenter({ children, className = '' }: FlexCenterProps) {
  return <div className={`flex items-center justify-center ${className}`}>{children}</div>;
}
