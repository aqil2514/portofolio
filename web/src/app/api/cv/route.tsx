import { pdf } from "@react-pdf/renderer";
import { PDFDocument } from "@/components/pdf/Document";
import { getAllCVData } from "@/sanity/actions/cv";
import { NextRequest, NextResponse } from "next/server";
import { LocaleLang } from "@/@types/General";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  // Fetch data & locale lebih aman dengan "const" berbeda
  const pdfData = await getAllCVData();
  const { searchParams } = req.nextUrl;
  const locale = searchParams.get("locale") as LocaleLang | null;

  if (!locale)
    return NextResponse.json(
      { message: "Locale is required" },
      { status: 400 }
    );

  // Buat JSX DI LUAR try/catch
  const element = <PDFDocument pdfData={pdfData} locale={locale} />;

  try {
    const buffer = await pdf(element).toBuffer();
    const fileName = `${locale.toUpperCase()} Muhamad Aqil Maulana - Full Stack Developer CV.pdf`;

    // @ts-expect-error Ini berhasil
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${fileName}`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);

    return new Response(JSON.stringify({ error: "Failed to generate" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
