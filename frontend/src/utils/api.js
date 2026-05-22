const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002';

export const API_ENDPOINTS = {
  PROJECTS: `${API_BASE_URL}/api/projects`,
  CONTACT: `${API_BASE_URL}/api/contact`,
  HEALTH: `${API_BASE_URL}/api/health`,
};

export const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const getProjects = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  const url = `${API_ENDPOINTS.PROJECTS}${params.toString() ? `?${params.toString()}` : ''}`;
  return apiRequest(url);
};

export const createProject = async (projectData) => {
  return apiRequest(API_ENDPOINTS.PROJECTS, {
    method: 'POST',
    body: JSON.stringify(projectData),
  });
};

export const sendContactMessage = async (messageData) => {
  return apiRequest(API_ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(messageData),
  });
};

export const checkHealth = async () => {
  return apiRequest(API_ENDPOINTS.HEALTH);
};
