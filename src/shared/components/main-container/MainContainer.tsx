type Props = {
  children: React.ReactNode;
  oneSide?: boolean;
};

export const MainContainer: React.FC<Props> = ({
  children,
  oneSide = false,
}) => {
  return (
    <div
      className={
        oneSide
          ? "w-full px-12 md:px-0 md:ps-12 xl:ps-24 xxl:ps-36  h-full"
          : "w-full px-12 xl:px-24 xxl:px-36 h-full"
      }
    >
      {children}
    </div>
  );
};
