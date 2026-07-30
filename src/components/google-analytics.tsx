import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const isValidMeasurementId = Boolean(measurementId && /^G-[A-Z0-9]+$/.test(measurementId));

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __alianzaF1GaId?: string;
    __alianzaF1LastPageView?: string;
  }
}

function initializeGoogleAnalytics(id: string) {
  window.dataLayer ??= [];
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  if (!document.querySelector(`script[data-ga4-id="${id}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.dataset.ga4Id = id;
    document.head.append(script);
  }

  if (window.__alianzaF1GaId !== id) {
    window.gtag("js", new Date());
    window.gtag("config", id, { send_page_view: false });
    window.__alianzaF1GaId = id;
  }
}

function sendPageView(id: string) {
  if (!window.gtag) return;

  const pageUrl = new URL(window.location.href);
  pageUrl.hash = "";

  const pageKey = `${id}:${pageUrl.pathname}${pageUrl.search}`;
  if (window.__alianzaF1LastPageView === pageKey) return;

  window.__alianzaF1LastPageView = pageKey;
  window.gtag("event", "page_view", {
    send_to: id,
    page_title: document.title,
    page_location: pageUrl.href,
  });
}

export function GoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    if (!isValidMeasurementId || !measurementId) return;

    initializeGoogleAnalytics(measurementId);

    let animationFrame: number | undefined;
    const schedulePageView = () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
      animationFrame = window.requestAnimationFrame(() => {
        sendPageView(measurementId);
        animationFrame = undefined;
      });
    };

    schedulePageView();

    const unsubscribe = router.subscribe("onRendered", ({ hrefChanged }) => {
      if (hrefChanged) schedulePageView();
    });

    return () => {
      unsubscribe();
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [router]);

  return null;
}
