import { useState } from "react";
import styles from "./ContactForm.module.css";
import { contactServices } from "../../../data/contactData";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  businessNature: string;
  location: string;
  message: string;
}

const businessNatures = [
  "Retail / E-commerce",
  "Service Provider",
  "Manufacturing",
  "Healthcare",
  "Education",
  "Food & Hospitality",
  "Technology / Startup",
  "Real Estate",
  "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    businessNature: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // Connect API
    // Reset Form
    // Show Toast
  };

  return (
    <motion.form
      className={styles.form}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Full Name *</label>

          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>Email Address *</label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Phone Number *</label>

          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>Company Name</label>

          <input
            type="text"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Service Required</label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>

            {contactServices.map((service) => (
              <option key={service.id} value={service.label}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Estimated Budget</label>

          <select name="budget" value={formData.budget} onChange={handleChange}>
            <option value="">Select Budget</option>
            <option>Below ₹25,000</option>
            <option>₹25,000 - ₹50,000</option>
            <option>₹50,000 - ₹1,00,000</option>
            <option>₹1,00,000+</option>
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Nature of Business</label>

          <select
            name="businessNature"
            value={formData.businessNature}
            onChange={handleChange}
          >
            <option value="">Select Business Type</option>

            {businessNatures.map((nature) => (
              <option key={nature} value={nature}>
                {nature}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Location</label>

          <input
            type="text"
            name="location"
            placeholder="City, State"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label>Tell Us About Your Project</label>

        <textarea
          name="message"
          rows={7}
          placeholder="Describe your project, goals, requirements, or any ideas you have..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Send Message
        <FiArrowRight />
      </button>
    </motion.form>
  );
};

export default ContactForm;
