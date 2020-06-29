export class ResponseMessage {
  private static errorMessage: Record<string, string> = {
    "password: This field may not be blank.":
      "이메일과 비밀번호를 입력해주세요.",
    'non_field_errors: Must include "email" and "password".':
      "이메일과 비밀번호를 입력해주세요.",
    "email: Enter a valid email address.": "이메일 형식이 잘못되었습니다.",
    "non_field_errors: Unable to log in with provided credentials.":
      "이메일과 비밀번호를 다시 확인해주세요.",
    "username: User with this name already exists.":
      "이미 사용중인 유저 이름입니다.",
    "email: A user is already registered with this e-mail address.":
      "이미 가입 되어있는 이메일입니다.",
    "password1: This password is too short. It must contain at least 8 characters.":
      "비밀번호는 최소 8자 이상이어야 합니다.",
    "password1: This password is too common.": "너무 흔한 비밀번호입니다.",
    "password1: This password is entirely numeric.":
      "비밀번호가 숫자로만 이루어져 있습니다."
  };

  static getErrorFrom(responseData: Record<string, (string | null)[]>): string {
    const messages: Array<string> = [];

    Object.keys(responseData).forEach(k => {
      responseData[k].forEach(v => {
        messages.push(this.errorMessage[`${k}: ${v}`]);
      });
    });

    return messages.join("<br/>");
  }
}
