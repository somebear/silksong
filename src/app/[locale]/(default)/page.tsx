import Hero from "@/components/blocks/hero";
import Feature1 from "@/components/blocks/feature1";
import FAQ from "@/components/blocks/faq";
import { getLandingPage } from "@/services/page";
import { setRequestLocale } from "next-intl/server";

export const revalidate = 60;
export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}`;
  }

  const title = locale === "zh" ? "丝之歌发售倒计时 - 空洞骑士官方资讯中心" : "Silksong Release Date Countdown - Hollow Knight Hub";
  const description = locale === "zh" 
    ? "空洞骑士丝之歌官方发售倒计时！Silksong release date确认，Hornet冒险即将开始。获取最新资讯、攻略指南，体验致命猎手的丝绸王国之旅。"
    : "Hollow Knight Silksong release date countdown! Official updates on Silksong launch. Follow Hornet's journey through the Silk Kingdom with guides and news.";

  return {
    title,
    description,
    keywords: "",
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || 'https://hollowknightsilksong.io'),
    openGraph: {
      title,
      description,
      images: ["/preview.png"],
      type: "website",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/preview.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = await getLandingPage(locale);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Countdown */}
      {page.hero && <Hero hero={page.hero} />}
      
      {/* Game Information Section */}
      {page.introduce && <Feature1 section={page.introduce} />}
      
      {/* FAQ Section */}
      {page.faq && <FAQ section={page.faq} />}
    </main>
  );
}
