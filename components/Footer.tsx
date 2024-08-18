import { Button } from "./ui/button";

type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="h-[6%] w-full flex flex-col items-center justify-center gap-3 px-6">
        <div className="h-[1px] w-[90%] bg-gray-500" ></div>
        <div className="flex gap-2 justify-center items-center " >
        <h1 className="font-normal " >Made and Devloped By</h1>
        <h1 className="font-medium " >Ashutosh</h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
