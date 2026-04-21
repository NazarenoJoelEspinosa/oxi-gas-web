// Routing
import { Switch, Route, Router as WouterRouter } from "wouter";

// State management (server state)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Providers
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

/**
 * Configuración global de React Query
 * - Evita refetch innecesario al enfocar ventana
 * - Desactiva reintentos automáticos
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

/**
 * Definición central de rutas
 */
function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Componente raíz de la aplicación
 * - Maneja providers globales
 * - Configura routing base
 */
function App() {
  // Normaliza el BASE_URL eliminando trailing slash
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={basePath}>
          <AppRouter />
        </WouterRouter>

        {/* Sistema global de notificaciones */}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
