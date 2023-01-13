import Image from "next/legacy/image";

const Loader = () => {
  return (
    <div className="fixed z-[60] bg-[rgba(0,0,0,0.6)] top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <Image src="/img/loader.gif" alt="loader" height={250} width={250} />
    </div>
  );
};

export default Loader;
