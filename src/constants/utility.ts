export const USER_TOKEN = `NF_USER_TOKEN`;

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export const ENDPOINTS = {
  GRAPHQL_URI: IS_DEVELOPMENT ? 'http://localhost:8082/api/graphql' : '/api/graphql',
  BASE_URL: IS_DEVELOPMENT ? 'http://localhost:8082/api/' : '/api/',
};

export const ERROR_MESSAGES = {
  REQUIRED_FIELD: `필수 필드`,
  INVALID_EMAIL: `이메일이 유효하지 않습니다`,
  PASSWORD_INVALID: `암호가 유효하지 않습니다`,
  PASSWORD_NOT_MATCHING: `비밀번호가 일치하지 않습니다`,
  PHONE_INVALID: `잘못된 전화 번호`,
};

export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
export const PHONE_REGEX = /^\d{3}-\d{3,4}-\d{4}$/;

export const USER_ROLES = {
  MANAGER: 'Manager',
  ADMIN: 'Admin',
};
