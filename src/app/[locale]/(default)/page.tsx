import Hero from "@/components/blocks/hero";
import Feature1 from "@/components/blocks/feature1";
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

  const title = locale === "zh" ? "空洞骑士：丝之歌 - 发售倒计时 | 官方资讯中心" : "Hollow Knight: Silksong - Release Countdown | Official Hub";
  const description = locale === "zh" 
    ? "《空洞骑士：丝之歌》官方发售倒计时！跟随致命猎手Hornet探索神秘的丝绸王国，掌握全新战斗技巧。获取最新资讯、攻略指南。"
    : "Official Hollow Knight: Silksong release countdown! Follow Hornet's epic journey through the mysterious Silk Kingdom. Get latest news, guides, and updates.";

  return {
    title,
    description,
    keywords: locale === "zh" 
      ? "空洞骑士,丝之歌,Hollow Knight,Silksong,Hornet,Team Cherry,发售时间,攻略,资讯"
      : "Hollow Knight,Silksong,Hornet,Team Cherry,release date,guide,news",
    openGraph: {
      title,
      description,
      images: ["/preview.png"],
      type: "website",
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
    </main>
  );
}
