import Footer from "../../components/footer";
import Header from "../../components/header";

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      <Header logo="About" />

      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to our platform! We are a passionate team of developers, designers, and problem-solvers committed to creating impactful digital solutions. Our mission is to build products that not only look great but also solve real-world problems in meaningful ways.
        </p>
        <p className="text-lg leading-relaxed">
          From ideation to deployment, we focus on delivering scalable, secure, and user-friendly applications. Whether it's a startup idea or an enterprise-level platform, we’re here to bring visions to life through technology.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default About;
