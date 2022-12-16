function Wrapper({ children }) {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3">
      {children}
    </div>
  );
}

export default Wrapper;
