import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "./pagination.css";

const Pagination = ({ page, setPage, totalPage }) => {
  const prevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="pagination">
      <button className="action-btn" onClick={prevPage}>
        <FaArrowLeft className="arrow-icon" />
      </button>
      <p className="page">
        Page <b>{page}</b> of {totalPage}
      </p>
      <button className="action-btn" onClick={nextPage}>
        <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default Pagination;
