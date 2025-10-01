import MainButton from "../Components/MainButton";
import pagenotfound404 from "../assets/404Page.png";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center flex-col space-y-4 min-h-screen">
        <img src={pagenotfound404} alt="" className="w-72 h-72" />
        <h1 className="text-red-600  text-2xl md:text-4xl">Page Not Found</h1>
        <p className=" text-gray-600 text-center">
          Oops! The page you are looking for seems to have wandered off on an
          adventure.
        </p>

        <MainButton name="Go Back" onClick={() => nav(-1)} />
      </div>
    </>
  );
};

export default PageNotFound;
