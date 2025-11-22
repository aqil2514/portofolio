import { portofolioData } from "@/constant/portofolio";
import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";

export function PDFHeader() {
  const { fullName, email, address, phoneNumber, github, linkedIn, portofolioLink } =
    portofolioData;

  return (
    <View style={styles.header}>
      <Text style={styles.fullName}>{fullName}</Text>

      <Text style={styles.row}>
        {email} • {phoneNumber} • {address}
      </Text>

      <Text style={styles.row}>
        {github} • {linkedIn} • {portofolioLink}
      </Text>
    </View>
  );
}
