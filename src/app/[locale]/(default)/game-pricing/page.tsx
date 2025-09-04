import GamePricing from "@/components/blocks/game-pricing";
import { getGamePricingPage } from "@/services/page";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getGamePricingPage(locale);
  
  return {
    title: page.gamePricing?.title || "空洞骑士：丝之歌官方定价",
    description: "空洞骑士丝之歌官方定价信息，包含Steam、PlayStation、Xbox、Switch等平台的价格对比",
    keywords: "",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEB_URL}/game-pricing`
    }
  };
}

export default async function GamePricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getGamePricingPage(locale);

  return (
    <>
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              {page.gamePricing?.title || "空洞骑士：丝之歌官方定价"}
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              {page.gamePricing?.description}
            </p>
          </div>
        </div>
      </section>
      
      {page.gamePricing && <GamePricing gamePricing={page.gamePricing} />}
      
      <section className="py-12 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-semibold text-center">{page.faq?.title || "常见问题"}</h2>
            <div className="space-y-4">
              {page.faq?.questions?.map((item, index) => (
                <div key={index} className="bg-background rounded-lg border p-6">
                  <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}