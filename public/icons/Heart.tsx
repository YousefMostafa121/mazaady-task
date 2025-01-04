const Index = ({ fill, width }: { fill?: boolean; width?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill ? "#D20653" : "none"}
      className=" !w-[14px] !h-[14px]"
    >
      <path
        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z"
        stroke={fill ? "#D20653" : "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Index;
