type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className="flex h-[6vh] w-full flex-col items-center justify-center gap-3 px-6">
        {/* <div className="h-[1px] w-[90%] bg-gray-500"></div> */}
        <div className="flex w-full flex-wrap items-center justify-center gap-4 border-t-[0.2vh] border-gray-500 pt-4">
          <div className="flex gap-2">
            <h1 className="font-normal">Made and Devloped By</h1>
            <h1 className="font-medium">Ashutosh</h1>
          </div>
          <a className="flex" href="https://github.com/keshav-exe/projekt-kosh">
            <h1 className="font-normal">Design inspired by Kesav</h1>
            <h1 className="pl-2 font-semibold text-zinc-900 dark:text-white">
              Kosh
            </h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
