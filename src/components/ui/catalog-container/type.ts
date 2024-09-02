type TCataloContainerUIProps = {
  children: React.ReactNode;
  className?: string;
  sortBy?: string;
  size?: number;
  loading?: boolean
  onClickSize: (value: number) => void;
};
