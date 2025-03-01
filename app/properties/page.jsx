import properties from "./properties.json";

const PropertiesPage = () => {
  return (
    <div>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <p> No Property Found</p>
          ) : (
            <div className="container-xl lg:container m-auto px-4 py-6">
              {properties.map((property) => (
                <div> {property.name}</div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
