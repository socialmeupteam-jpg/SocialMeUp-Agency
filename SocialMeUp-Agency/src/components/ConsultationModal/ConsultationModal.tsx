// import { useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   FiX,
//   FiMapPin,
//   FiPhone,
//   FiMail,
//   FiSend,
// } from "react-icons/fi";

// import styles from "./ConsultationModal.module.css";

// interface ConsultationModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function ConsultationModal({
//   isOpen,
//   onClose,
// }: ConsultationModalProps) {
//   useEffect(() => {
//     const handleKey = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     window.addEventListener("keydown", handleKey);

//     return () => window.removeEventListener("keydown", handleKey);
//   }, [onClose]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className={styles.overlay}
//           onClick={onClose}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className={styles.modal}
//             onClick={(e) => e.stopPropagation()}
//             initial={{
//               opacity: 0,
//               scale: 0.92,
//               y: 40,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               scale: 0.95,
//               y: 30,
//             }}
//             transition={{
//               duration: 0.35,
//             }}
//           >
//             <button
//               className={styles.close}
//               onClick={onClose}
//               aria-label="Close"
//             >
//               <FiX />
//             </button>

//             <div className={styles.left}>
//               <span className={styles.badge}>
//                 GET IN TOUCH
//               </span>

//               <h2>
//                 Let's Start Something
//                 <span> Great</span>
//               </h2>

//               <p>
//                 Ready to transform your business?
//                 Fill out the form below and our
//                 strategy team will contact you.
//               </p>

//               <div className={styles.cards}>
//                 <div className={styles.card}>
//                   <FiMapPin />
//                   <h4>Delhi Office</h4>
//                   <p>
//                     Mohan Cooperative Industrial Estate,
//                     Badarpur, New Delhi
//                   </p>
//                 </div>

//                 <div className={styles.card}>
//                   <FiMapPin />
//                   <h4>Lucknow Office</h4>
//                   <p>
//                     Sarojini Nagar,
//                     Lucknow, Uttar Pradesh
//                   </p>
//                 </div>

//                 <div className={styles.card}>
//                   <FiPhone />
//                   <h4>Phone</h4>
//                   <p>+91 8004857390</p>
//                 </div>

//                 <div className={styles.card}>
//                   <FiMail />
//                   <h4>Email</h4>
//                   <p>info@socialmeup.in</p>
//                 </div>
//               </div>
//             </div>

//             <div className={styles.right}>
//               <h3>Book Free Consultation</h3>

//               <form className={styles.form}>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                 />

//                 <select defaultValue="">
//                   <option value="" disabled>
//                     Select a Service
//                   </option>

//                   <option>Digital Marketing</option>
//                   <option>SEO</option>
//                   <option>Website Development</option>
//                   <option>Social Media</option>
//                   <option>Google Ads</option>
//                 </select>

//                 <textarea
//                   rows={6}
//                   placeholder="Tell us about your project..."
//                 />

//                 <button type="submit">
//                   <FiSend />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }