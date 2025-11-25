import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const size = { width: 1200, height: 630 };

export async function generateOGImage({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle?: string;
  color?: string;
}) {
  const cinzelFont = await readFile(
    join(process.cwd(), "public/fonts/Cinzel/static/Cinzel-SemiBold.ttf")
  );

  const poppinsFont = await readFile(
    join(process.cwd(), "public/fonts/Poppins/Poppins-SemiBold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: color || "#0A2A43",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontFamily: "Cinzel",
            fontSize: 84,
            fontWeight: 600,
            margin: 0,
            letterSpacing: "2px",
          }}
        >
          Muhamad Aqil Maulana
        </h1>

        <div
          style={{
            width: "60%",
            height: "3px",
            backgroundColor: "rgba(255,255,255,0.5)",
            marginTop: "24px",
            marginBottom: "16px",
          }}
        />

        <p
          style={{
            fontFamily: "Poppins",
            fontSize: 48,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            opacity: 0.95,
            textAlign: "center",
          }}
        >
          {title}
        </p>

        {subtitle && (
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: 28,
              marginTop: 20,
              opacity: 0.75,
              textAlign: "center",
              maxWidth: "70%",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    ),
    {
      ...size,
      width: 1200,
      height: 630,
      fonts: [
        { name: "Cinzel", data: cinzelFont, weight: 600 },
        { name: "Poppins", data: poppinsFont, weight: 600 },
      ],
    }
  );
}
