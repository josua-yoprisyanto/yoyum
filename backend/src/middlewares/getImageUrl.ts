require('dotenv').config()

const baseUrl = "http://localhost:5000"

export const getImageUrl = (filename: string): string => {
    return `${baseUrl}/api/uploads/${filename}`;
  };