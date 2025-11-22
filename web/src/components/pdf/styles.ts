import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  // -----------------------------
  // PAGE (Word-like)
  // -----------------------------
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 50,
    fontSize: 11,
    fontFamily: "Times-Roman",
    lineHeight: 1.4,
    color: "#000000",
  },

  // -----------------------------
  // HEADER
  // -----------------------------
  header: {
    marginBottom: 18,
  },

  fullName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  row: {
    fontSize: 10,
    color: "#333",
    marginBottom: 2,
  },

  // -----------------------------
  // SUMMARY
  // -----------------------------
  summarySection: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottom: "3",
    borderBottomColor: "#000",
  },

  summaryText: {
    fontSize: 11,
    textAlign: "justify",
    marginBottom: 2,
  },

  // -----------------------------
  // EXPERIENCE SECTION
  // -----------------------------
  experienceSection: {
    marginTop: 14,
  },

  experienceTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },

  expItemContainer: {
    marginTop: 10,
    marginBottom: 8,
  },

  // JOB TITLE + DATE (2 col)
  expHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  expJobTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },

  expDates: {
    fontSize: 10.5,
  },

  // COMPANY + LOCATION (2 col)
  expSubRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 4,
  },

  expCompany: {
    fontSize: 10.5,
    fontStyle: "italic",
  },

  expLocation: {
    fontSize: 10.5,
  },

  // BULLETS
  expBullet: {
    fontSize: 10.5,
    marginLeft: 10,
    marginBottom: 3,
  },

  // -----------------------------
  // EDUCATION SECTION
  // -----------------------------
  educationSection: {
    marginTop: 14,
  },

  educationTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
  },

  eduItemContainer: {
    marginBottom: 12,
  },

  // Row 1 (degree + dates)
  eduTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },

  eduDegree: {
    fontSize: 11,
    fontWeight: "bold",
  },

  eduDates: {
    fontSize: 10.5,
  },

  // Row 2 (university + location)
  eduSecondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },

  eduUniversity: {
    fontSize: 10.5,
  },

  eduLocation: {
    fontSize: 10.5,
  },

  // Row 3 (GPA)
  eduGPA: {
    fontSize: 10.5,
    marginTop: 4,
  },

  // -----------------------------
  // SKILLS SECTION
  // -----------------------------
  skillsSection: {
    marginTop: 14,
  },

  skillsTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    borderBottomWidth: 2,
    borderColor: "#000",
    paddingBottom: 2,
  },

  skillsText: {
    fontSize: 11,
    marginTop: 4,
    lineHeight: 1.4,
    marginRight: 8,
  },

  // -----------------------------
  // PROJECTS SECTION
  // -----------------------------
  projectsSection: {
    marginTop: 16,
  },

  projectsTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },

  projectItemContainer: {
    marginBottom: 10,
  },

  // Row: Title + Date
  projectHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },

  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },

  projectDates: {
    fontSize: 10.5,
  },

  // Role (italic)
  projectRole: {
    fontSize: 10.5,
    fontStyle: "italic",
    marginBottom: 4,
  },

  // Bullets
  projectBullet: {
    fontSize: 10.5,
    marginLeft: 10,
    marginBottom: 3,
  },
});
