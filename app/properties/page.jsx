import PropertyCard from "../../components/PropertyCard";
import { fetchProperties } from "../../utils/requests";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  //Sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No Property Found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
