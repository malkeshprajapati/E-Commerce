function PaginationRenderer({
  currentPagination,
  totalPaginationLength,
  handlePagination,
}) {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-x-5">
      {Array(totalPaginationLength)
        .fill(null)
        .map((_, index) => (
          <p
            key={index + 1}
            className={`cursor-pointer font-semibold rounded-full w-10 h-10 flex-center ${
              currentPagination === index + 1 ? "bg-[#D9D9D9]" : "bg-white"
            }`}
            onClick={() => handlePagination({ index: index + 1 })}
          >
            {index + 1}
          </p>
        ))}
    </div>
  );
}

export default PaginationRenderer;
