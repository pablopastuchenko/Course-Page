import client from "../services/vimeoClient.js"; // Adicione .js para arquivos de módulo ES

export const getVideo = async (req, res) => {
  const videoId = req.params.videoId;
  try {
    const video = await new Promise((resolve, reject) => {
      client.request(
        {
          method: "GET",
          path: `/videos/${videoId}`,
        },
        (error, body, statusCode, headers) => {
          if (error) {
            reject(error);
          } else {
            resolve(body);
          }
        }
      );
    });
    res.json(video);
  } catch (error) {
    console.error("Error fetching video:", error);
    res.status(500).send("Error fetching video");
  }
};
