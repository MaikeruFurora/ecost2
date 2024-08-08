// src/services/csrf.js
export const fetchCsrfToken = async () => {
    try {
      const response = await fetch('auth/csrf-token', {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
      }
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  };
  