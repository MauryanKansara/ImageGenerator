const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mt-5 mb-6">
        <a
          href="https://github.com/MauryanKansara"
          target="_blank"
          className="black_btn tracking-wide"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/mauryan_24"
          target="_blank"
          className="black_btn tracking-wide"
        >
          Twitter
        </a>
      </nav>

      <h1 className="head_text">
        <span> Welcome to </span>
        <br />
        <span className="orange_gradient">Image Generator</span>
      </h1>
      <h2 className="desc">
        Provide prompt to the below input to generate images.
      </h2>
    </header>
  );
};

export default Hero;
