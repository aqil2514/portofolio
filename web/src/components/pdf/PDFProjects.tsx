import { ProjectsSection } from "@/@types/PDF";
import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";

const projectsData: ProjectsSection = {
  title: "PROJECTS",
  items: [
    {
      title: "Retail Management System (Web App)",
      role: "Full Stack Developer",
      startDate: "2023",
      endDate: "Present",
      bullets: [
        "Developed a web-based retail management system using Next.js, NestJS, Supabase, and Tailwind CSS.",
        "Implemented real-time stock tracking, margin calculation, and profit analytics.",
        "Added role-based authentication, authorization, and secure API routing.",
        "Integrated Midtrans for digital payment simulation and automated reporting.",
      ],
    },
    {
      title: "Financial Dashboard System",
      role: "Full Stack Developer",
      startDate: "2024",
      endDate: "2024",
      bullets: [
        "Created a full financial dashboard for tracking income, expenses, and margins.",
        "Used React.js, Node.js, and MySQL with optimized queries for fast data processing.",
        "Designed dynamic charts, summaries, and printable monthly reports.",
      ],
    },
  ],
};

export const PDFProjects = () => {
  return (
    <View style={styles.projectsSection}>
      <Text style={styles.sectionTitle}>{projectsData.title}</Text>

      {projectsData.items.map((project, index) => (
        <View key={index} style={styles.projectItemContainer}>
          {/* Title + Dates */}
          <View style={styles.projectHeaderRow}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDates}>
              {project.startDate} - {project.endDate}
            </Text>
          </View>

          {/* Role */}
          {project.role && (
            <Text style={styles.projectRole}>{project.role}</Text>
          )}

          {/* Bullets */}
          {project.bullets.map((b, i) => (
            <Text key={i} style={styles.projectBullet}>
              • {b}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};
