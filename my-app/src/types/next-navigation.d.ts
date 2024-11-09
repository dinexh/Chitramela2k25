declare module 'next/navigation' {
    export const useRouter: () => {
        push: (url: string) => void;
        // Add other methods as needed
    };
    export const useSearchParams: () => {
        get: (key: string) => string | null;
    };
} 