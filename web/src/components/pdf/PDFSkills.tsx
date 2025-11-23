import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { SkillsSection } from "@/@types/PDF";
import React from "react";
import { LocaleLang } from "@/@types/General";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";

interface Props {
  data: SkillsSection;
  locale: LocaleLang;
}

export const PDFSkills: React.FC<Props> = ({ data, locale }) => {
  return (
    <View style={styles.skillsSection}>
      <Text style={styles.sectionTitle}>
        {getInternationalizationValue(data.title, locale)}
      </Text>

      {data.skills.map((skill, index) => (
        <Text key={index} style={styles.skillItem}>
          <Text style={styles.skillLabel}>{skill.label}: </Text>
          <Text style={styles.skillValue}>{skill.value}</Text>
        </Text>
      ))}
    </View>
  );
};
