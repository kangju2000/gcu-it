declare module 'tailwind-datepicker-react' {
  interface IDatePickerProps {
    children?: ReactElement | ReactNode;
    options?: IOptions;
    onChange?: (date: Date) => void;
    show: boolean;
    setShow: (show: boolean) => void;
    classNames?: string;
    selectedDateState?: [Date, (date: Date) => void];
  }
  export default function DatePicker(props: IDatePickerProps): ReactElement;
}
