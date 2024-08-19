import { Button } from "./ui/button";

type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className="h-[6vh] w-full flex flex-col items-center justify-center gap-3 px-6">
        <div className="h-[1px] w-[90%] bg-gray-500"></div>
        <div className="flex gap-5 justify-center items-center ">
          <h1 className="font-normal ">Made and Devloped By</h1>
          <h1 className="font-medium ">Ashutosh</h1>
          <a className="flex " href="https://github.com/keshav-exe/projekt-kosh">
            <h1 className="font-normal ">Design inspired by Kesav</h1>
            <h1 className="font-semibold text-zinc-900 pl-2 dark:text-white ">Kosh</h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
