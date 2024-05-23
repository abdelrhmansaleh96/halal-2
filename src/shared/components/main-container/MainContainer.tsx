type Props = {
  children: React.ReactNode;
  oneSide?: boolean;
};

export const MainContainer: React.FC<Props> = ({ children, oneSide = false }) => {
  return (
    <div
      className={
        oneSide
          ? "w-full pl-12 xl:pl-24 xxl:pl-36 rtl:pl-0 rtl:pr-12 rtl:xl:pr-24 rtl:xxl:pr-36 h-full"
          : "w-full px-12 xl:px-24 xxl:px-36 h-full"
      }
    >
      {children}
    </div>
  );
};
