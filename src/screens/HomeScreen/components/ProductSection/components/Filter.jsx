import FilterSkeleton from "../../../../../components/Loaders/FilterSkeleton";

const FilterRendererer = ({
  title,
  filterList,
  selectedFilter,
  isFetching,
  isError,
  handleFilterActions,
}) => {
  if (isError) {
    return (
      <>
        <h5 className="mt-8">{title}</h5>
        <p className="text-sm">No filters available</p>
      </>
    );
  }

  return (
    <>
      <h5 className="mt-8">{title}</h5>
      {isFetching ? (
        Array(5)
          .fill(null)
          .map((_, index) => <FilterSkeleton key={index} />)
      ) : (
        <ul>
          {filterList.map((filter) => (
            <li
              key={filter.id}
              onClick={() =>
                handleFilterActions({ title, id: filter.id, name: filter.name })
              }
              className={`capitalize cursor-pointer text-sm my-3 ${
                selectedFilter.name === filter.name
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              {filter.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

function Filter({
  materialList,
  colorList,
  selectedFilter,
  isMaterialDataFetching,
  isColorDataFetching,
  isMaterialDataError,
  isColorDataError,
  handleFilterActions,
}) {
  return (
    <div className="w-1/6">
      <h6 className="font-bold">Filter</h6>
      <FilterRendererer
        title="Materials"
        filterList={materialList}
        selectedFilter={selectedFilter.materials}
        isFetching={isMaterialDataFetching}
        isError={isMaterialDataError}
        handleFilterActions={handleFilterActions}
      />
      <FilterRendererer
        title="Color"
        filterList={colorList}
        selectedFilter={selectedFilter.color}
        isFetching={isColorDataFetching}
        isError={isColorDataError}
        handleFilterActions={handleFilterActions}
      />
    </div>
  );
}

export default Filter;
