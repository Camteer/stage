type TCataloContainerUIProps = {
  children: React.ReactNode;
  className?: string;
  sortBy?: string;
  size?: number;
  page?: number;
  loading?: boolean
  total: number;
  onClickSize: (value: number) => void;
  onClickPage: (value: number) => void
};
