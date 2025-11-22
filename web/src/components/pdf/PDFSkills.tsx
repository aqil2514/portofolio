import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { SkillsSection } from "@/@types/PDF";

const skillsData: SkillsSection = {
  title: "SKILLS",
  skills: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Node.js",
    "Express.js",
    "NestJS",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
    "REST API",
    "Cloud Computing (Vercel, Firebase)",
    "CI/CD",
    "Communication",
    "Adaptability",
    "Time Management"
  ]
};


export const PDFSkills = () => {
  return (
    <View style={styles.skillsSection}>
      <Text style={styles.sectionTitle}>{skillsData.title}</Text>

      <Text style={styles.skillsText}>
        {skillsData.skills.join(", ")}
      </Text>
    </View>
  );
};
