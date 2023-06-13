interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

function Header({ className = '', children, ...props }: BoxProps) {
  return (
    <div className={`mb-4 text-[16px] ${className}`} {...props}>
      {children}
    </div>
  );
}

function Body({ className = '', children, ...props }: BoxProps) {
  return (
    <div className={`text-[14px] ${className}`} {...props}>
      {children}
    </div>
  );
}

export default function Box({ className = '', children, ...props }: BoxProps) {
  return (
    <div className={`w-full rounded-lg bg-gray-100  p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

Box.Header = Header;
Box.Body = Body;
