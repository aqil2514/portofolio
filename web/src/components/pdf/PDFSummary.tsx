import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { SummarySection } from "@/@types/PDF";

interface Props {
  data: SummarySection;
}

export function PDFSummary({ data }: Props) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{data.title}</Text>

      <Text style={styles.summaryText}>{data.item}</Text>
    </View>
  );
}
