/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ page, setPage }) => {
  const prevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-10 text-xl">
      <button
        onClick={() => {
          prevPage();
        }}
        className="text-white hover:bg-white hover:text-black duration-300 border border-neutral-800 flex items-center justify-center p-2"
      >
        <FaArrowLeft />
      </button>

      <p className="text-white">{page}</p>

      <button
        onClick={() => {
          nextPage();
        }}
        className="text-white hover:bg-white hover:text-black duration-300 border border-neutral-800 flex items-center justify-center p-2"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
