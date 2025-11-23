import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { EducationSection } from "@/@types/PDF";
import { LocaleLang } from "@/@types/General";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { formatMonthYear } from "@/utils/formatMonthYear";

interface Props {
  data: EducationSection;
  locale: LocaleLang;
}

export function PDFEducation({data, locale}: Props) {
  return (
    <View style={styles.educationSection}>
      <Text style={styles.sectionTitle}>{getInternationalizationValue(data.title, locale)}</Text>

      {data.items.map((edu, index) => (
        <View key={index} style={styles.eduItemContainer}>
          {/* Row 1: Degree + Dates */}
          <View style={styles.eduTopRow}>
            <Text style={styles.eduDegree}>
              {getInternationalizationValue(edu.degree, locale)} {getInternationalizationValue(edu.major, locale)}
            </Text>
            <Text style={styles.eduDates}>
              {formatMonthYear(edu.startDate, locale)} - {formatMonthYear(edu.endDate, locale)}
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
