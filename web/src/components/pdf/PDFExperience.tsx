import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { ExperienceSection } from "@/@types/PDF";

const experienceData: ExperienceSection = {
  title: "EXPERIENCE",
  items: [
    {
      jobTitle: "Warehouse Administration Staff",
      company: "PT. Alumindo Alloy Abadi",
      location: "Cibitung, West Java",
      startDate: "March 2024",
      endDate: "March 2025",
      bullets: [
        "Recorded and managed stock using ERP and Excel systems",
        "Ensured smooth product distribution and logistics across branches",
      ],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Freelance / Personal Projects",
      location: "Sukawangi, West Java",
      startDate: "July 2023",
      endDate: "Present",
      bullets: [
        "Developed a web-based retail management system including transaction tracking, inventory control, and margin calculations using Next.js, NestJS, Supabase, Shadcn, and Tailwind CSS.",
        "Built an internal financial dashboard for tracking income, expenses, and profit using React.js, Node.js, and MySQL.",
        "Integrated Midtrans API for payment simulation and added Google Analytics & Search Console for insights.",
        "Applied scalable full stack architecture with authentication, authorization, and efficient ID structuring.",
        "Focused on usability and efficiency based on real business experience.",
      ],
    },
  ],
};

export const PDFExperience = () => {
  return (
    <View style={styles.experienceSection}>
      <Text style={styles.sectionTitle}>{experienceData.title}</Text>

      {experienceData.items.map((item, index) => (
        <View key={index} style={styles.expItemContainer}>

          {/* Job Title & Dates */}
          <View style={styles.expHeaderRow}>
            <Text style={styles.expJobTitle}>{item.jobTitle}</Text>
            <Text style={styles.expDates}>
              {item.startDate} - {item.endDate}
            </Text>
          </View>

          {/* Company & Location */}
          <View style={styles.expSubRow}>
            <Text style={styles.expCompany}>{item.company}</Text>
            <Text style={styles.expLocation}>{item.location}</Text>
          </View>

          {/* Bullet List */}
          {item.bullets.map((b, i) => (
            <Text key={i} style={styles.expBullet}>• {b}</Text>
          ))}

        </View>
      ))}
    </View>
  );
};
