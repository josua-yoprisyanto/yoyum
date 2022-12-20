require("dotenv").config();

const baseUrl = "http://localhost:5001";

export const getImageUrl = (filename: string): string => {
  return `${baseUrl}/api/uploads/${filename}`;
};
