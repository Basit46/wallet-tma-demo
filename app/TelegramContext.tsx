"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

// Define proper TypeScript interfaces
interface TelegramUser {
  id: number;
  first_name?: string;
  [key: string]: any;
}

interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  enableClosingConfirmation: () => void;
  isVerticalSwipesEnabled: boolean;
  initData: string;
  initDataUnsafe?: {
    user?: TelegramUser;
    start_param?: string;
  };
  close: () => void;
  BackButton: {
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
  };
}

interface TelegramContextType {
  loading: boolean;
  firstName: string;
  userPhoto: string | null;
  handleClose: () => void;
  userTelegramId: string;
  newUser: boolean;
  setNewUser: (value: boolean) => void;
  user: Record<string, any>;
}

interface TelegramProviderProps {
  children: ReactNode;
}

// Create context with initial values to avoid null checks
const TelegramContext = createContext<TelegramContextType>({
  loading: true,
  firstName: "Mate",
  userPhoto: null,
  handleClose: () => {},
  userTelegramId: "",
  newUser: false,
  setNewUser: () => {},
  user: {},
});

export const TelegramProvider = ({ children }: TelegramProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("Mate");
  const [userTelegramId, setUserTelegramId] = useState("");
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState<Record<string, any>>({});

  const pathname = usePathname();
  const router = useRouter();
  const isInitialized = useRef(false);
  const webAppRef = useRef<TelegramWebApp | null>(null);

  // Initialize Telegram WebApp
  useEffect(() => {
    const webApp = (window as any).Telegram?.WebApp as
      | TelegramWebApp
      | undefined;
    webAppRef.current = webApp || null;

    if (!webApp || isInitialized.current) return;

    isInitialized.current = true;

    const initWebApp = () => {
      webApp.ready();
      webApp.expand();
      webApp.enableClosingConfirmation();
      webApp.isVerticalSwipesEnabled = false;
    };

    try {
      initWebApp();
    } catch (error) {
      console.error("Error initializing Telegram WebApp:", error);
      setLoading(false);
    }

    // Cleanup function
    return () => {
      if (webAppRef.current?.BackButton) {
        webAppRef.current.BackButton.hide();
      }
    };
  }, []);

  // Back button handler
  useEffect(() => {
    const webApp = webAppRef.current;
    if (!webApp) return;

    const isRootPath = pathname === "/" || pathname === "/welcome";

    if (!isRootPath) {
      webApp.BackButton.show();
      const handleBack = () => router.back();
      webApp.BackButton.onClick(handleBack);

      return () => {
        webApp.BackButton.hide();
      };
    } else {
      webApp.BackButton.hide();
    }
  }, [pathname, router]);

  // Memoized close handler
  const handleClose = useCallback(() => {
    webAppRef.current?.close();
  }, []);

  // Memoized context value to prevent unnecessary rerenders
  const contextValue = {
    loading,
    firstName,
    userPhoto,
    handleClose,
    userTelegramId,
    newUser,
    setNewUser,
    user,
  };

  return (
    <TelegramContext.Provider value={contextValue}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegramContext = () => {
  const context = useContext(TelegramContext);
  if (!context) {
    throw new Error(
      "useTelegramContext must be used within a TelegramProvider"
    );
  }
  return context;
};
