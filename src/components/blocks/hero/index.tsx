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
      <section className="py-24">
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
              <h1 className="hero-title mx-auto mb-3 mt-4 max-w-6xl text-balance">
                {texts[0]}
                <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                  {highlightText}
                </span>
                {texts[1]}
              </h1>
            ) : (
              <h1 className="hero-title mx-auto mb-3 mt-4 max-w-6xl text-balance">
                {hero.title}
              </h1>
            )}

            <p
              className="mx-auto mb-8 max-w-3xl text-muted-foreground lg:text-xl"
              dangerouslySetInnerHTML={{ __html: hero.description || "" }}
            />

            {/* Silksong Release Countdown */}
            {(hero as any).show_countdown && (
              <div className="mb-12 relative">
                {/* Countdown Background */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-20 bg-cover bg-center bg-no-repeat -z-10"
                  style={{
                    backgroundImage: 'url(/imgs/countdown-bg.jpg)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Countdown Content */}
                <div className="relative z-10 p-8 rounded-2xl backdrop-blur-sm bg-black/20 border border-primary/20">
                  <Countdown
                    targetDate={process.env.NEXT_PUBLIC_RELEASE_DATE || "2025-09-04T00:00:00Z"}
                    size="lg"
                    className="mb-0"
                    locale={locale}
                  />
                </div>
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
