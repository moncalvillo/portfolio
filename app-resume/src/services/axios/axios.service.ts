import axios from "axios";

export class AxiosService {
  public static makeRequest = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data: any,
    language?: string
  ) => {
    const isResume = url.endsWith("/resume");
    if (language === "es") {
      url = url.replace("api/", "api/es/");
    }

    const response = await axios({
      url,
      method,
      data,
      responseType: isResume ? "blob" : "json",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: isResume ? "application/pdf" : "application/json",
      },
    }).catch((error) => {
      console.log(error);
    });

    if (isResume && response?.data) {
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      return URL.createObjectURL(pdfBlob);
    }

    return response?.data;
  };
}
