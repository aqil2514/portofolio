const MONTHS: Record<string, string[]> = {
  id: [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ],
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
};

export function formatMonthYear(date: string, locale: "id" | "en") {
  if (!date) return "";

  const d = new Date(date);
  const month = d.getMonth();    // 0–11
  const year = d.getFullYear();

  const months = MONTHS[locale] ?? MONTHS.en;

  return `${months[month]}, ${year}`;
}
