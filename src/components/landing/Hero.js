import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return _jsxs("section", {
    className:
      "relative min-h-screen flex items-center justify-center overflow-hidden pt-16",
    children: [
      _jsx("div", {
        className:
          "hero-glow hero-glow-primary -top-40 -left-40 animate-pulse-slow",
      }),
      _jsx("div", {
        className:
          "hero-glow hero-glow-secondary top-1/2 -right-40 animate-pulse-slow delay-200",
      }),
      _jsx("div", {
        className:
          "absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]",
      }),
      _jsx("div", {
        className: "container mx-auto px-6 relative z-10",
        children: _jsxs("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [
            _jsxs("div", {
              className:
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8 animate-slide-up",
              children: [
                _jsx("span", {
                  className:
                    "w-2 h-2 rounded-full bg-primary animate-pulse",
                }),
                _jsx("span", {
                  className: "text-sm text-muted-foreground",
                  children: "AI-Powered Documentation Engine",
                }),
              ],
            }),

            _jsxs("h1", {
              className:
                "text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up delay-100",
              children: [
                "Your developers spend ",
                _jsx("span", {
                  className: "text-gradient glow-text",
                  children: "58%",
                }),
                " of their time ",
                _jsx("span", {
                  className: "text-muted-foreground",
                  children: "reading code",
                }),
              ],
            }),

            _jsxs("p", {
              className:
                "text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up delay-200 max-w-2xl mx-auto",
              children: [
                "Not writing it. Not shipping features. ",
                _jsx("span", {
                  className: "text-foreground",
                  children: "Just trying to understand it.",
                }),
              ],
            }),

            _jsx("p", {
              className:
                "text-lg text-muted-foreground mb-10 animate-slide-up delay-300",
              children: "Dokero gives them the answers instantly.",
            }),

            // CTA
            _jsx("div", {
              className:
                "flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400",
              children: _jsxs(Button, {
                variant: "hero",
                size: "xl",
                children: [
                  "Book a Demo",
                  _jsx(ArrowRight, { className: "w-5 h-5 ml-2" }),
                ],
              }),
            }),

            // Stats (FIXED: now separate block)
            _jsxs("div", {
              className:
                "mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-slide-up delay-400",
              children: [
                _jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    _jsx("span", {
                      className: "font-mono text-primary",
                      children: "30%",
                    }),
                    _jsx("span", { children: "capacity recovered" }),
                  ],
                }),

                _jsx("div", {
                  className: "hidden sm:block w-px h-4 bg-border",
                }),

                _jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    _jsx("span", {
                      className: "font-mono text-primary",
                      children: "2.7M",
                    }),
                    _jsx("span", {
                      children: "DKK saved per 10 devs",
                    }),
                  ],
                }),

                _jsx("div", {
                  className: "hidden sm:block w-px h-4 bg-border",
                }),

                _jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    _jsx("span", {
                      className: "font-mono text-primary",
                      children: "80%",
                    }),
                    _jsx("span", { children: "faster onboarding" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};

export default Hero;
