import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { EducationSection } from "@/@types/PDF";

const educationData: EducationSection = {
  title: "EDUCATION",
  items: [
    {
      degree: "Bachelor's Degree in Translation",
      major: "(Arabic-Indonesian)",
      university: "Universitas Islam Negeri Syarif Hidayatullah Jakarta",
      location: "Ciputat, Tangerang",
      startDate: "September 2019",
      endDate: "July 2023",
      gpa: "3.66 / 4.00",
    },
  ],
};

export function PDFEducation() {
  return (
    <View style={styles.educationSection}>
      <Text style={styles.sectionTitle}>{educationData.title}</Text>

      {educationData.items.map((edu, index) => (
        <View key={index} style={styles.eduItemContainer}>
          {/* Row 1: Degree + Dates */}
          <View style={styles.eduTopRow}>
            <Text style={styles.eduDegree}>
              {edu.degree} {edu.major}
            </Text>
            <Text style={styles.eduDates}>
              {edu.startDate} - {edu.endDate}
            </Text>
          </View>

          {/* Row 2: University + Location */}
          <View style={styles.eduSecondRow}>
            <Text style={styles.eduUniversity}>{edu.university}</Text>
            <Text style={styles.eduLocation}>{edu.location}</Text>
          </View>

          {/* Row 3: GPA */}
          <Text style={styles.eduGPA}>GPA {edu.gpa}</Text>
        </View>
      ))}
    </View>
  );
}
