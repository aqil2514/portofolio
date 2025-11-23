import { ProjectsSection } from "@/@types/PDF";
import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { LocaleLang } from "@/@types/General";
import React from "react";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { formatMonthYear } from "@/utils/formatMonthYear";

interface Props{
  data:ProjectsSection,
  locale:LocaleLang;
}

export const PDFProjects:React.FC<Props> = ({data, locale}) => {
  return (
    <View style={styles.projectsSection}>
      <Text style={styles.sectionTitle}>{getInternationalizationValue(data.title, locale)}</Text>

      {data.items.map((project, index) => (
        <View key={index} style={styles.projectItemContainer}>
          {/* Title + Dates */}
          <View style={styles.projectHeaderRow}>
            <Text style={styles.projectTitle}>{getInternationalizationValue(project.title, locale)}</Text>
            <Text style={styles.projectDates}>
              {formatMonthYear(project.startDate, locale)} - {formatMonthYear(project.endDate, locale)}
            </Text>
          </View>

          {/* Role */}
          {project.role && (
            <Text style={styles.projectRole}>{getInternationalizationValue(project.role, locale)}</Text>
          )}

          {/* Bullets */}
          {project.bullets.map((b, i) => (
            <Text key={i} style={styles.projectBullet}>
              • {getInternationalizationValue(b.text, locale)}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};
