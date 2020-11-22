import { login, signUp, signUpCheck, passwordReset, passwordResetAuth } from "../api/user";
import { writerApplycation, writerAuth, writerCheckCode, poembookApplycation, fileUpload } from "../api/application";

export default {
  LOGIN({ commit }, { email, password }) {
    return login(email, password).then((data) => {
      commit("LOGIN", data);
    });
  },
  SIGN_UP({ commit } , { email, nickname, password }) {
    return signUp(email, nickname, password).then((data) => {
      commit("SIGN_UP", data);
    });
  },
  SIGN_UP_CHECK({ commit }, { code }) {
    return signUpCheck(code)
    .then(() => commit("SIGN_UP"), true)
    .catch((error) => {
        if(error.response.status == 409) commit("SIGN_UP", "409");
        else if(error.response.status == 404) commit("SIGN_UP", "404");
        else commit("SIGN_UP", false);
    })
  },
  PASSWORD_RESET(_, { newPassword, authCode }) {
    return passwordReset(newPassword, authCode)
  },
  PASSWORD_RESET_AUTH(_, { email }) {
    return passwordResetAuth(email)
  },
  FILE_UPLOAD({ commit }, { file }) {
    return fileUpload(file).then((data) => {
        commit("FILE_UPLOAD", data);
    })
  },
  POEMBOOK_APPLYCATION(_, { link, fileId }) {
    return poembookApplycation(link, fileId);
  },
  WRITER_APPLYCATION(_, { link, goal }) {
    return writerApplycation(goal, link);
  },
  WRITER_AUTH(_, { email }) {
    return writerAuth(email);
  },
  WRITER_CHECK_CODE(_, { code }) {
    return writerCheckCode(code);
  }
};