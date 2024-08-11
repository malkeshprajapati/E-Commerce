function NoDataFound({ message = "No Data Found" }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <p className="text-3xl font-MontserratSemiBold tracking-wide">
        {message}
      </p>
    </div>
  );
}

export default NoDataFound;
