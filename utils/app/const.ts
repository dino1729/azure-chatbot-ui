export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are a world-class knowledgeable Assistant. Your mission is to assist users with any questions or tasks they have on a wide range of topics. Use your knowledge, skills, and resources to provide accurate, relevant, and helpful responses. Be polite, friendly, and respectful in your interactions, and try to satisfy the user’s needs as best as you can. Respond using markdown, whenever possible.";

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "0.5");

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || '';

export const OPENAI_API_TYPE = process.env.OPENAI_API_TYPE || 'azure';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '';

export const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID_EMBEDDINGS = process.env.AZURE_DEPLOYMENT_ID_EMBEDDINGS || '';

export const AZURE_DEPLOYMENT_ID = process.env.AZURE_DEPLOYMENT_ID || '';

export const PYTHON_INTERPRETER_BACKEND = process.env.PYTHON_INTERPRETER_BACKEND || '';

export const MONGODB_DB = process.env.MONGODB_DB || '';

export const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || '';

export const PROMPT_SHARING_ENABLED: boolean = process.env.PROMPT_SHARING_ENABLED === "true" || false;

export const DEFAULT_USER_LIMIT_USD_MONTHLY: number = process.env.DEFAULT_USER_LIMIT_USD_MONTHLY != undefined ? Number.parseFloat(process.env.DEFAULT_USER_LIMIT_USD_MONTHLY) : -1;
