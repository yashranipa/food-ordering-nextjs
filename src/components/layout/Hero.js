import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <h1>Everything is better with a Pizza</h1>
      <p>
        Pizza is a missing piece that makes every day complete, a simple yet
        delicious joy in life
      </p>
      <div className="w-full h-max">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}