// images
import navLogo from "../../assets/images/blog-logo.png";

const PresentationSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl pt-12 md:px-16">
      <div className="flex max-w-2xl flex-col gap-2 px-4 sm:px-8">
        <div className="h-32 w-32">
          <img
            src={navLogo}
            className="h-full w-full object-cover"
            alt="blog logo"
          />
        </div>

        <h1 className="pb-6 text-4xl font-bold dark:text-white sm:text-5xl">
          {" "}
          Über Blog, the must-read blog to overcome onself.
        </h1>

        <p className="text-justify leading-7 text-zinc-600/90 dark:text-zinc-400">
          This blog is built upon the foundational philosophy of self-overcoming
          which is a fundamental principle of Friedrich Nietzsche's philosophy.
          The basic premise of this blog is that each article should aim to
          allow its readers to grow and overcome themselves.
        </p>
      </div>
    </section>
  );
};

export default PresentationSection;
