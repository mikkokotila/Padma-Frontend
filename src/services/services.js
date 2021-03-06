import API from "./apiBase";
const dictLookupUrl = "/dictionary_lookup";
const searchTextsUrl = "/search_texts";
const renderTextUrl = "/render_text";
const tokenizeUrl = "/tokenize";
const wordStatisticsUrl = "/word_statistics";
const similarWordsUrl = "/find_similar";

const apiInstance = API();

export const Services = {
  async dictionaryLookup(query) {
    try {
      return await apiInstance.get(`${dictLookupUrl}?query=${query}&mode=api`);
    } catch (err) {
      return null;
    }
  },

  async searchTexts(query) {
    try {
      return await apiInstance.get(`${searchTextsUrl}?query=${query}&mode=api`);
    } catch (err) {
      return null;
    }
  },

  async renderText(title, start, end) {
    try {
      if (start != null && end != null) {
        return await apiInstance.get(
          `${renderTextUrl}?title=${title}&start=${start}&end=${end}&mode=api`
        );
      } else {
        return await apiInstance.get(
          `${renderTextUrl}?title=${title}&mode=api`
        );
      }
    } catch (err) {
      return null;
    }
  },

  async tokenize(query) {
    try {
      return await apiInstance.get(`${tokenizeUrl}?query=${query}&mode=api`);
    } catch (err) {
      return null;
    }
  },

  async wordStatistics(query) {
    try {
      return await apiInstance.get(
        `${wordStatisticsUrl}?query=${query}&mode=api`
      );
    } catch (err) {
      return null;
    }
  },

  async similarWords(query) {
    try {
      return await apiInstance.get(
        `${similarWordsUrl}?query=${query}&mode=api`
      );
    } catch (err) {
      return null;
    }
  }
};
