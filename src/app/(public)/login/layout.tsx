import StyledComponentsRegistry from "@/app/regystry";
import Header from "@/components/Header";
import GlobalStyles from "@/styles/global";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
