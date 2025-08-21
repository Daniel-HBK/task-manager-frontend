// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  tasks: `${API_BASE_URL}/api/tasks`,
} as const;

// Helper function to build API URLs with query parameters
export const buildApiUrl = (endpoint: string, params?: Record<string, string | number>): string => {
  const url = new URL(endpoint);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  
  return url.toString();
};
