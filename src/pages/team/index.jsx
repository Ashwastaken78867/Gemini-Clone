import Footer from "../../components/footer";
import Header from "../../components/header";

const Team = () => {
  return (
    <div id="team" className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      <Header logo={"Team"} />

      <main className="px-6 py-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Meet Our Team</h1>
        <p className="text-lg leading-relaxed mb-10 text-center">
          We are a passionate group of developers, designers, and visionaries working together to bring powerful digital solutions to life. With a strong belief in innovation, collaboration, and clean code, we strive to make every project impactful and user-friendly.
        </p>

        {/* Optional: Add team cards or bios here in the future */}
        {/* Example: <UserList /> or <TeamGrid /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Team;
