import axios from "axios";

export const Api = {
  async getMatchParams(obj) {
    const { data } = await axios.get(
      "https://bet2affiliates.com/global/feed/json/?language=eng&timeZone=179"
    );
    console.log(obj, data.sport[obj.sport].region[obj.region]);
    return data.sport[obj.sport].region[obj.region].competition[obj.competition]
      .game[obj.game];
  }
};
