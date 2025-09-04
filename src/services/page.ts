import { LandingPage, PricingPage, ShowcasePage } from "@/types/pages/landing";
import { GamePricingPage } from "@/types/pages/game-pricing";

export async function getLandingPage(locale: string): Promise<LandingPage> {
  try {
    if (locale === "zh-CN") {
      locale = "zh";
    }

    const messages = await import(
      `@/i18n/pages/landing/${locale.toLowerCase()}.json`
    ).then((module) => module.default);
    
    return messages as LandingPage;
  } catch (error) {
    console.warn(`Failed to load ${locale}.json, falling back to en.json`);

    const messages = await import(`@/i18n/pages/landing/en.json`).then(
      (module) => module.default
    );
    
    return messages as LandingPage;
  }
}

export async function getPricingPage(locale: string): Promise<PricingPage> {
  return (await getPage("pricing", locale)) as PricingPage;
}

export async function getShowcasePage(locale: string): Promise<ShowcasePage> {
  return (await getPage("showcase", locale)) as ShowcasePage;
}

export async function getGamePricingPage(locale: string): Promise<GamePricingPage> {
  return (await getPage("game-pricing", locale)) as GamePricingPage;
}

export async function getPage(
  name: string,
  locale: string
): Promise<LandingPage | PricingPage | ShowcasePage> {
  try {
    if (locale === "zh-CN") {
      locale = "zh";
    }

    return await import(
      `@/i18n/pages/${name}/${locale.toLowerCase()}.json`
    ).then((module) => module.default);
  } catch (error) {
    console.warn(`Failed to load ${locale}.json, falling back to en.json`);

    return await import(`@/i18n/pages/${name}/en.json`).then(
      (module) => module.default
    );
  }
}
