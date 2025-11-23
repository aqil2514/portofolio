import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { SummarySection } from "@/@types/PDF";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { LocaleLang } from "@/@types/General";

interface Props {
  data: SummarySection;
  locale: LocaleLang;
}

export function PDFSummary({ data, locale }: Props) {
  return (
    <View>
      <Text style={styles.sectionTitle}>
        {getInternationalizationValue(data.title, locale)}
      </Text>

      <Text style={styles.summaryText}>
        {getInternationalizationValue(data.item, locale)}
      </Text>
    </View>
  );
}
