import { createFileRoute } from "@tanstack/react-router";
import QuizFunnel from "@/components/quiz/QuizFunnel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gelatina Mounjaro — Descubra seu protocolo personalizado 💖" },
      { name: "description", content: "Descubra o truque simples que está ajudando milhares de mulheres a reduzir medidas naturalmente. Receita caseira, simples e prática." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" },
      { property: "og:title", content: "Gelatina Mounjaro — Seu protocolo personalizado" },
      { property: "og:description", content: "Receita caseira, simples e prática. Resultados em semanas." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return <QuizFunnel />;
}
