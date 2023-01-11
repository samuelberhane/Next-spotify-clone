import Card from "./Card";

const Feed = ({ title, datas }) => {
  return (
    <div className="mb-8">
      <h1 className="font-bold text-2xl md:text-3xl mb-4">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5">
        {datas.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
