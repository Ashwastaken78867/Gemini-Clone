import Footer from "../../components/footer";
import Header from "../../components/header";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      <Header logo={"Contact"} />

      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          We'd love to hear from you! Whether you have a question about features, pricing, or anything else,
          our team is ready to answer all your questions.
        </p>

        <div className="space-y-2">
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Address:</strong> Jaipur, Rajasthan, India</p>
        </div>

        {/* Future: Add a contact form here */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
