import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { ExperienceSection } from "@/@types/PDF";
import { LocaleLang } from "@/@types/General";
import React from "react";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { formatMonthYear } from "@/utils/formatMonthYear";

interface Props {
  data: ExperienceSection;
  locale: LocaleLang;
}

export const PDFExperience: React.FC<Props> = ({ data, locale }) => {
  const isCurrentValue = locale === "en" ? "Present" : "Sekarang";
  return (
    <View style={styles.experienceSection}>
      <Text style={styles.sectionTitle}>
        {getInternationalizationValue(data.title, locale)}
      </Text>

      {data.items.map((item, index) => (
        <View key={index} style={styles.expItemContainer}>
          {/* Job Title & Dates */}
          <View style={styles.expHeaderRow}>
            <Text style={styles.expJobTitle}>
              {getInternationalizationValue(item.jobTitle, locale)}
            </Text>
            <Text style={styles.expDates}>
              {formatMonthYear(item.startDate, locale)} -{" "}
              {item.isCurrent
                ? isCurrentValue
                 : formatMonthYear(item.endDate, locale)}
            </Text>
          </View>

          {/* Company & Location */}
          <View style={styles.expSubRow}>
            <Text style={styles.expCompany}>{item.company}</Text>
            <Text style={styles.expLocation}>
              {getInternationalizationValue(item.location, locale)}
            </Text>
          </View>

          {/* Bullet List */}
          {item.bullets.map((b, i) => (
            <Text key={i} style={styles.expBullet}>
              • {getInternationalizationValue(b.text, locale)}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};
