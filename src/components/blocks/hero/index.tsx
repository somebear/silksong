import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HappyUsers from "./happy-users";
import HeroBg from "./bg";
import { Hero as HeroType } from "@/types/blocks/hero";
import Icon from "@/components/icon";
import { Link } from "@/i18n/navigation";
import { Countdown } from "@/components/countdown";
import { getLocale } from "next-intl/server";

export default async function Hero({ hero }: { hero: HeroType }) {
  const locale = await getLocale();
  if (hero.disabled) {
    return null;
  }

  const highlightText = hero.highlight_text;
  let texts = null;
  if (highlightText) {
    texts = hero.title?.split(highlightText, 2);
  }

  return (
    <>
      <HeroBg />
      
      {/* Silksong Hero Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/imgs/countdown-bg.jpg)',
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Hollow Knight: Silksong
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              {hero.release_date || "2025年9月4日 解锁"}
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-24 -mt-16 relative z-10">
        <div className="container">
          {hero.show_badge && (
            <div className="flex items-center justify-center mb-8">
              <img
                src="/imgs/badges/phdaily.svg"
                alt="phdaily"
                className="h-10 object-cover"
              />
            </div>
          )}
          <div className="text-center">
            {hero.announcement && (
              <Link
                href={hero.announcement.url as any}
                className="mx-auto mb-3 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm"
              >
                {hero.announcement.label && (
                  <Badge>{hero.announcement.label}</Badge>
                )}
                {hero.announcement.title}
              </Link>
            )}

            {texts && texts.length > 1 ? (
              <h2 className="hero-title mx-auto mb-3 mt-4 max-w-6xl text-balance text-3xl md:text-5xl font-bold">
                {texts[0]}
                <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                  {highlightText}
                </span>
                {texts[1]}
              </h2>
            ) : (
              <h2 className="hero-title mx-auto mb-3 mt-4 max-w-6xl text-balance text-3xl md:text-5xl font-bold">
                {hero.title}
              </h2>
            )}

            <p
              className="mx-auto mb-8 max-w-3xl text-muted-foreground lg:text-xl"
              dangerouslySetInnerHTML={{ __html: hero.description || "" }}
            />

            {/* Silksong Release Countdown */}
            {(hero as any).show_countdown && (
              <div className="mb-12">
                <Countdown
                  targetDate={process.env.NEXT_PUBLIC_RELEASE_DATE || "2025-09-04T00:00:00Z"}
                  size="lg"
                  className="mb-0"
                  locale={locale}
                />
              </div>
            )}

            {hero.buttons && (
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                {hero.buttons.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={item.url as any}
                      target={item.target || ""}
                      className="flex items-center"
                    >
                      <Button
                        className={`w-full cta-button ${item.variant === 'default' ? 'cta-button' : ''}`}
                        size="lg"
                        variant={item.variant || "default"}
                      >
                        {item.icon && <Icon name={item.icon} className="mr-2" />}
                        {item.title}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            )}
            {hero.tip && (
              <p className="mt-8 text-md text-muted-foreground">{hero.tip}</p>
            )}
            {hero.show_happy_users && <HappyUsers />}
          </div>
        </div>
      </section>
    </>
  );
}
