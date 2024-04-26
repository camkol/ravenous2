import Business from "./Business";

export default function BusinessList({ businesses }) {
  return (
    <div className="businessList">
      {businesses.map((business) => {
        return <Business business={business} key={business.name} />;
      })}
    </div>
  );
}
