import axios from "axios";

export const Api = {
  async getMatchParams(obj) {
    const { data } = await axios.get(
      "https://bet2affiliates.com/global/feed/json/?language=eng&timeZone=14"
    );
    console.log("data:", data, "obj:", obj);
    return data.sport[obj.sport].region[obj.region].competition[obj.competition]
      .game[obj.game];
  },

  async setComandLogo(img, name) {
    let fd = new FormData();
    fd.append("upload", img);
    fd.append("name", name);
    return await axios.post(
      "https://bet2u.eu/dynamic/admin/api/rest/index.php",
      fd
    );
  }
};
