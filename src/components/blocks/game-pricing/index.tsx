"use client";

import { GamePricingData } from "@/types/pages/game-pricing";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface GamePricingProps {
  gamePricing: GamePricingData;
}

export default function GamePricing({ gamePricing }: GamePricingProps) {
  const getPriceDisplay = (price: number | null, regionCode: string) => {
    if (price === null) {
      return "未定价";
    }
    
    const symbol = gamePricing.currencySymbols[regionCode];
    
    // 日本价格特殊处理（日元没有小数点）
    if (regionCode === 'jp') {
      return `¥${price.toLocaleString()}`;
    }
    
    return `${symbol}${price}`;
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="mx-auto mb-8 text-center">
          <p className="text-sm text-muted-foreground">
            Currently available on: {gamePricing.availablePlatforms.join(", ")}
          </p>
        </div>

        <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[120px] font-semibold">
                  Region
                </TableHead>
                {gamePricing.availablePlatforms.map(platform => (
                  <TableHead key={platform} className="text-center font-semibold">
                    {platform}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {gamePricing.prices.map((priceEntry) => (
                <TableRow key={priceEntry.regionCode} className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    {priceEntry.region}
                  </TableCell>
                  {gamePricing.availablePlatforms.map(platform => (
                    <TableCell key={platform} className="text-center">
                      {priceEntry.platforms[platform] 
                        ? getPriceDisplay(priceEntry.platforms[platform], priceEntry.regionCode)
                        : "-"
                      }
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="p-4 bg-muted/20 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <div>
                {gamePricing.dataSource} • Last updated: {gamePricing.lastUpdated}
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(gamePricing.storeLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
                  >
                    Buy on {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}